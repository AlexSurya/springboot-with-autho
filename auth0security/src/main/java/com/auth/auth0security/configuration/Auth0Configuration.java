/**
 * 
 */
package com.auth.auth0security.configuration;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import com.auth0.spring.security.api.JwtWebSecurityConfigurer;

/**
 * @author alexsurya
 *
 */
@EnableWebSecurity
@Configuration
public class Auth0Configuration extends WebSecurityConfigurerAdapter {

	@Value(value = "${auth0.apiAudience}")
	private String apiAudience;
	@Value(value = "${auth0.issuer}")
	private String issuer;

	@Bean
	CorsConfigurationSource corsConfigurationSource() {

		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
		corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
		corsConfiguration.setAllowCredentials(true);
		corsConfiguration.addAllowedHeader("Authorization");
		UrlBasedCorsConfigurationSource basedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
		basedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
		return basedCorsConfigurationSource;
		
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {

		JwtWebSecurityConfigurer
			.forRS256(apiAudience, issuer)
			.configure(httpSecurity)
			.authorizeRequests()
			.antMatchers(HttpMethod.GET, "/api/public").permitAll()
			.antMatchers(HttpMethod.GET, "/api/private").authenticated();
	}

}

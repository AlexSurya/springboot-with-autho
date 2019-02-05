/**
 * 
 */
package com.auth.auth0security.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author alexsurya
 *
 */
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping(path = "api/**")
public class TestController {

	@GetMapping(path = "public")
	public boolean publicMethod() {
		return true;
	}
	
	@GetMapping(path = "private")
	public boolean privateMethod() {
		return true;
	}
}

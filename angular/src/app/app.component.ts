import { Component, OnInit } from '@angular/core';
import { RootService } from './rootservice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auth0';

  constructor(private http: RootService) {

  }


  ngOnInit() {


    this.http.post().subscribe(fromserver => {
      console.log(fromserver);
      this.http.get("private", fromserver).subscribe(fromserver => {
        console.log(fromserver);
      });
    })

    this.http.public("public").subscribe(fromserver => {
      console.log(fromserver);
    });

  }
}

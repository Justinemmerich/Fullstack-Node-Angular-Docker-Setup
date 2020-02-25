import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) { }

  title = 'frontend';
  test = Date.now();

  testUrl = 'http://localhost:3000/test';

  myServerRes = 'no data';

  SendRequestExpress() {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

   //return this.http.get(this.testUrl).subscribe(data => this.myServerRes = data.toString());
    this.http.get('http://localhost:3000/test', {observe:'response', headers: httpOptions.headers},).subscribe( res => { 
      console.log(res) ;
      let response = res.body;
      this.myServerRes = response["data"];
    });
  }

}

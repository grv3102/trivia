import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

myarray: String[] = [];
i: number = 0;
constructor(private http: HttpClient) { }
  next() {   
    ++this.i;
   
  }

  answerkey: AnswerKey[] = [];

  check( str: String) {
    this.answerkey.push(new AnswerKey(str));
    console.log(this.answerkey);

  }
  showres() {
  	
    var params = {
        answers : this.answerkey
    }

    console.log(params)

    var head= {
     header : new HttpHeaders({
         'Content-Type' : 'application/json'
     })
    }

    this.http.post('', params, head).subscribe(data =>{
    console.log(data);
    },error => console.log('Not worked'));
}

}

export class AnswerKey {
  choosen: String;

  constructor(choosen: String) {
    this.choosen = choosen;
  }

}
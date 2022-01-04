import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-putrequest',
  templateUrl: './putrequest.component.html',
  styleUrls: ['./putrequest.component.css']
})
export class PutrequestComponent implements OnInit {
  postId: any;
  postId1: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simple POST request with a JSON body and response type <any>
    // this.http.post<Article>('https://jsonplaceholder.typicode.com/posts/', { title: 'Angular POST Request Example of jsonplaceholder',API:'Fake Rest API' }).subscribe(data => {
    //   this.postId = data.id;
    // })}
    this.http.post<Article>('https://reqres.in/api/users', { name: 'Angular POST Request Example of reqres' ,API:'Fake Rest API' }).subscribe(data => {
      
      this.postId = data.id;
  })}
//   const body = { name: 'Angular PUT Request Example',API:'Fake Rest API' };
//     this.http.put<Article2>('https://jsonplaceholder.typicode.com/posts/2', body)
//         .subscribe(data => this.postId = data.id);
// }

}
interface Article {
  id: number;
  name: string;
  API:string;
}
interface Article2 {
  id: number;
  name: string;
  API:string;
}


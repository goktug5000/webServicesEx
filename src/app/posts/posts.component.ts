import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {


  post:[any]=[""];
  private mainUrl='https://jsonplaceholder.typicode.com/posts';



  constructor(private http: HttpClient){
    http.get(this.mainUrl).subscribe(response=>{
      console.log(response);
      this.post= <[any]>response;
    });
  }


  createPost(inputt:HTMLInputElement){
    const post={title:inputt.value};
    inputt.value='';

    this.http.post(this.mainUrl, JSON.stringify(inputt)).subscribe(response=>{
      /*post['id'] = response?['id']; BU NEDEN VAR Kİ*/
      this.post.splice(0,0,post);
      console.log(post);
    });
  }


  updatePost(inputt:any){
    inputt.title='updated';
    this.http.put(this.mainUrl + "/" + inputt.id, JSON.stringify(inputt));
  }


}

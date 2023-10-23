import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  error:any;

  post:[any]=[""];




  constructor(private postService:PostService){
    
  }


  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(
        response => { this.post = <[any]>response }
        ,
        error => { 
          error.message+=' post.compnents.ts.ngOnInit()';
          this.error = error;
         }
      );
  }
  
  createPost(inputt: HTMLInputElement) {
    const post = { title: inputt.value };
    inputt.value = '';
    this.postService.createPost(post).subscribe(response => {
      console.log(response);
      this.post.splice(0, 0, post);
    }
      ,
      error => { 
        error.message+=' post.compnents.ts.createPost()';
        this.error = error;
       }
    );
  }


  updatePost(postt:any){
    this.postService.updatePost(postt).subscribe(response => {
      console.log(response);
    }
      ,
      error => { 
        error.message+=' post.compnents.ts.updatePost()';
        this.error = error;
       }
    );



  }



  deletePost(postt:any){
    this.postService.deletePost(postt).subscribe(response=> {
      let index=this.post.indexOf(postt);
      this.post.splice(index,1);

    });
  }

}

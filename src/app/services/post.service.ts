import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService{

  private mainUrl='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { 

  }




  getPosts(){
    return this.http.get(this.mainUrl);
  }
  createPost(inputt:any){

    return this.http.post(this.mainUrl, JSON.stringify(inputt));
  }
  updatePost(inputt:any){
    inputt.title='updated';

    //veri küçükse fark etmez, objeyi tam değiştiriyor üstüne yazarak
    //this.http.put(this.mainUrl + "/" + inputt.id, JSON.stringify(inputt)).subscribe(response=> console.log(response));

    //objeyi sadece bir kısmını güncelliyor veri dostu
    return this.http.patch(this.mainUrl + "/" + inputt.id, JSON.stringify(inputt));
  }

  deletePost(inputt:any){
    return this.http.delete(this.mainUrl + "/" + inputt.id);
  }


}

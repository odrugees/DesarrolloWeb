import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PostService {

  private urlEndPoint: string = 'http://localhost:3000/post';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlEndPoint)
  }
  postUser(user: Post) :Observable<Post>{
    return this.http.post<Post>(this.urlEndPoint, user, {headers: this.httpHeaders})
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.urlEndPoint}/${id}`)
  }

  putUser(user: Post): Observable<Post> {
    return this.http.put<Post>(`${this.urlEndPoint}/${user.idPost}`, user, {headers: this.httpHeaders})
  }

  deleteUser(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}

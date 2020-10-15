import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  private urlEndPoint: string = 'http://localhost:3000/user';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlEndPoint)
  }

  postUser(user: User) :Observable<User>{
    return this.http.post<User>(this.urlEndPoint, user, {headers: this.httpHeaders})
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.urlEndPoint}/${id}`)
  }

  putUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.urlEndPoint}/${user.idUser}`, user, {headers: this.httpHeaders})
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}

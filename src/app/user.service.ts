import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './types';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const url = 'https://testpv3009.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,

  ) { }

  // signUp(user: User){
  //   return this.http.post<any>(`${url}/user/signUp`, user, httpOptions)
  //   .subscribe(res => {
  //     if (!res.success) return alert('The member name already exists');
  //     alert('Create Member Success');
  //   });
  // }
  signUp(user: User){
    return this.http.post<any>(`${url}/user/signUp`, user, httpOptions)
    .toPromise();
  }
}

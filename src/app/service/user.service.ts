import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url='http://localhost:8080/api/user/get';

  constructor(private http: HttpClient) { }



  public getUsers() {
    let response = this.http.get(this.url,
      {responseType:'text'});
    console.log(response);
    return response;
  }

  // public async getUsers() {
  //   const response = await fetch(this.url,{
  //     method:'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   return await response.json()
  // }
}

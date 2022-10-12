
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {

   
  constructor(private httpClient: HttpClient) { }
  
  getData(){
    return this.httpClient.get('https://dog.ceo/api/breeds/list/all');
  }
  
}
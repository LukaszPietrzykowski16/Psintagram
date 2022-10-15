
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }
 
  getData(inputValue: string){
    return this.httpClient.get(`https://dog.ceo/api/breed/${inputValue}/images/random`);
  }
  
}


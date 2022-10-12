
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  breed = 'affenpinscher'
  url = `https://dog.ceo/api/breed/${this.breed}/images/random`
   
  constructor(private httpClient: HttpClient) { }
  onChange(newValue: any) {
    this.breed = newValue.value
    this.url = `https://dog.ceo/api/breed/${this.breed}/images/random`

  }
  getData(){
    return this.httpClient.get(`https://dog.ceo/api/breed/${this.breed}/images/random`);
  }
  
}


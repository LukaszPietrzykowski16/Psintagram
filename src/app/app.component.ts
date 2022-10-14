import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { ImageService } from './services/image.service';
import { PostService } from './services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  myData: any;
  myData2: any;
  arr: any;
  test: [] = [];
  selected: number = 1;
  httpClient: any;
  image: string | undefined;

  constructor(private postService: PostService, private imageService: ImageService) {}
  breed = 'affenpinscher'
  inputvalue:string  = this.breed;
  onChange(newValue: any) {
    this.breed = newValue.value
    this.url = `https://dog.ceo/api/breed/${this.breed}/images/random`
    this.changePhoto(this.breed)
  }
 
  
  url = `https://dog.ceo/api/breed/${this.breed}/images/random`


  paragraph = "Poczytaj więcej o tej rasie na wikipedii:"
  
  

  ngOnInit(): void { 
    this.postService.getData().subscribe((data) => {
      this.myData = data;
      this.arr = Object.keys(this.myData.message);
    });
    this.imageService.getData(this.breed).subscribe((data) => {
      this.myData2 = data;
      this.image = this.myData2.message
    
    });
    
    
   
  }
  changePhoto(value: string){
    this.imageService.getData(value).subscribe((data) => {
      this.myData2 = data;
      this.image = this.myData2.message
    
    });
  }




  

}


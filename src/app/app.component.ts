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

  constructor(private postService: PostService) {}
  // changing links value 
  onChange(newValue: any) {
    this.breed = newValue.valu
  }
 
  breed = 'affenpinscher'



  paragraph = "Poczytaj więcej o tej rasie na wikipedii:"
  
  
  ngOnInit(): void {
    this.postService.getData().subscribe((data) => {
      this.myData = data;
      this.arr = Object.keys(this.myData.message);
    });
    
  }


  

}


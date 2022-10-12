import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  myData: any;
  arr: any;
  test: [] = [];
  selected: number = 1;

  constructor(private postService: PostService) {}
  onChange(newValue: any) {
    this.breed = newValue.value
    this.url = `https://dog.ceo/api/breed/${this.breed}/images/random`
    console.log(this.url)
  }
 
  breed = 'affenpinscher'
  url = `https://dog.ceo/api/breed/${this.breed}/images/random`


  paragraph = "Poczytaj więcej o tej rasie na wikipedii:"
  
  
  ngOnInit(): void {
    this.postService.getData().subscribe((data) => {
      this.myData = data;
      this.arr = Object.keys(this.myData.message);
    });
    
   
   
  }

}


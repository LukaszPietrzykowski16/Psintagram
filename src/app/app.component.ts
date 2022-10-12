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
  names: any;
  constructor(private postService: PostService) {}
  
  clicked = false;
  title = 'myapp';

  handleClick(){
    this.clicked = true;
  }

  ngOnInit(): void {
    this.postService.getData().subscribe((data) => {
      this.myData = data;
      this.names = this.myData.message;
      console.log(this.names)
      this.names.bulldog.map((test:any) => {
        console.log(test)
      })
      
    });
   
  }

}

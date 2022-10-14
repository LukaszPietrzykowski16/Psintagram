import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})
export class DogImageComponent implements OnInit {
  myData2: any;
  image: string | undefined;
  constructor(private imageService: ImageService) { }

  onChange(newValue: any) {
    this.breed = newValue.value
    this.url = `https://dog.ceo/api/breed/${this.breed}/images/random`

  }
 
  breed = 'affenpinscher'
  url = `https://dog.ceo/api/breed/${this.breed}/images/random`




  ngOnInit(): void {

    this.imageService.getData().subscribe((data) => {
      console.log(data)
      this.myData2 = data;
      this.image = this.myData2.message
    
    });

  }

}

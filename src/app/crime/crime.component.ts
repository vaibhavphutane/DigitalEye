import { Component, OnInit } from '@angular/core';
import { CrimeService } from '../crime.service';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css'],
  providers: []
})
export class CrimeComponent implements OnInit {


  images: any[];
  selectedId: number;
  processedImageURL: string;
  isProccessing: boolean;
  objects: string;

  constructor(private crimeService: CrimeService) { }

  ngOnInit(): void {
    this.images = this.crimeService.files.map((item, index) => {
      return {
        id: index,
        image: item
      };
    });
    console.log(this.images);
  }

  processImage(img) {
    const crimeSceneImage = new File([img], 'crimeImage.png');
    this.isProccessing = true;
    this.crimeService.postImageAPI(crimeSceneImage).subscribe(res => {
      this.isProccessing = false;
      this.processedImageURL = '../../assets/images/img10.PNG';
      this.objects = 'Pills / Syringe';
    });
  }
}


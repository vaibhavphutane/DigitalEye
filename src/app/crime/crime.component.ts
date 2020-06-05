import { Component, OnInit } from '@angular/core';
import { CrimeService } from '../crime.service';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css']
})
export class CrimeComponent implements OnInit {


  images: any[];
  selectedId: number;
  processedImageURL: string;
  isProccessing: boolean;

  constructor(private crimeService: CrimeService) { }

  ngOnInit(): void {
    this.images = [
      {img: '../../assets/images/img01.PNG', id: 1},
      {img: '../../assets/images/img08.PNG', id: 2},
      {img: '../../assets/images/img09.PNG', id: 3},
      {img: '../../assets/images/img10.PNG', id: 4},
    ];
  }

  processImage(id) {
    this.selectedId = id;
    const selectedIdImage = this.images.find(item => item.id === id);
    this.isProccessing = true;
    this.crimeService.getImage(selectedIdImage).then(res => {
      const crimeSceneImage = new File([res], 'crimeImage.png');
      this.crimeService.postImageAPI(crimeSceneImage).subscribe((crimeProcessedImage: any) => {
        this.processedImageURL = crimeProcessedImage.imageURL;
        this.isProccessing = false;
      },
      err => {
        console.log(err);
        this.isProccessing = false;
      });
    });
  }

}

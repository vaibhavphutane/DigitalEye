import { Component, OnInit } from '@angular/core';
import { CrimeService } from '../crime.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css'],
  providers: [],
})
export class CrimeComponent implements OnInit {
  images: any[];
  selectedId: number;
  processedImageURL: string;
  isProccessing: boolean;
  objects: string;
  basUrl = environment.baseURL;


  constructor(private crimeService: CrimeService) {}

  ngOnInit(): void {
    this.images = this.crimeService.files && this.crimeService.files.map((item, index) => {
      return {
        id: index,
        image: item,
      };
    });
    console.log(this.images);
  }

  processImage(img) {
    const crimeSceneImage = new File([img], 'crimeImage.png');
    this.isProccessing = true;
    this.crimeService.postImageAPI(crimeSceneImage).subscribe((res: any) => {
      this.isProccessing = false;
      this.processedImageURL = this.basUrl + 'output' + res.message.file;
      this.objects = res.message.object;
    });
  }

}

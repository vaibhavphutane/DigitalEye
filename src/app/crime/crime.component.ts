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
    this.crimeService.getFileBlob(img).subscribe((res: any) => {
      const date = new Date();
      const imgName = 'crimeImage_' + date.toISOString() + '.png';
      const crimeSceneImage = new File([res], imgName);
      this.isProccessing = true;
      this.crimeService.postImageAPI(crimeSceneImage).subscribe((response: any) => {
        this.isProccessing = false;
        this.processedImageURL = this.basUrl + 'output/' + response.message.img_name;
        this.objects = response.message.objects_found;
      });
    });
  }



}

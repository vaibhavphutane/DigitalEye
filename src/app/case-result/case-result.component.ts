import { Component, OnInit } from '@angular/core';
import { CrimeService } from '../crime.service';

@Component({
  selector: 'app-case-result',
  templateUrl: './case-result.component.html',
  styleUrls: ['./case-result.component.css']
})
export class CaseResultComponent implements OnInit {

  images: any[];
  constructor(private crimeSceneService: CrimeService) { }

  ngOnInit(): void {
    this.images = this.crimeSceneService.getFiles;
    console.log(this.images);
  }

}

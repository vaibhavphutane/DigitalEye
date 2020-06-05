import { Component, OnInit } from '@angular/core';
import { CrimeService } from '../crime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imageUrls: any[];
  constructor(private crimeService: CrimeService) {}

  ngOnInit(): void {
    this.imageUrls = [];
  }

  async fileLoaded(event) {
   await  [...event.target.files].forEach((file: Blob) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrls.push(reader.result);
      };
      reader.readAsDataURL(file);
    });
    this.crimeService.files = this.imageUrls;
  }
}

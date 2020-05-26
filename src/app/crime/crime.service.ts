import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrimeService {

  constructor(private http: HttpClient) { }

  postImageAPI(crimeSceneImage: File) {
   const fd = new FormData();
   fd.append(crimeSceneImage.name, crimeSceneImage);
   return of({imageURL: '../../assets/images/image1.jpg'});
  //  return this.http.post('', fd, {reportProgress: true});
  }

  getImage(imageObj) {
   return this.http.get(imageObj.img, {responseType: 'blob'}).toPromise();
  }
}

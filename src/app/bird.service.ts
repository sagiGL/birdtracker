import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  birdURL = "https://zapari.any.do/birds";
  googleStaticLocationURL = 'https://maps.googleapis.com/maps/api/staticmap?';
  key = 'AIzaSyCuwENWB9D1yZo1W0VONjWq4osmBhL4mF8';

  birds: Bird[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  fetchBirds(size: number): Observable<{items:Bird[]}> {
    let URL = `${this.birdURL}/${size}`
    return this.http.get<any>(URL);
  }

  getStaticLocation(lat:number, lng:number,zoom: number){
    return `${this.googleStaticLocationURL}center=${lat},${lng}&zoom=${zoom}&size=400x400&key=${this.key}`;
  }
}


export interface Bird {
  image: string,
  location: {
    lat: number,
    lng: number
  },
  name: string,
  sound: string
}
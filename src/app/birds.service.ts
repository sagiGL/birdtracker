import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {
  birdsUrl: string = 'https://zapari.any.do/birds/20';
  StaticLocationUrl: string = `https://maps.googleapis.com/maps/api/staticmap?`;
  // Key: string = 'AIzaSyBtrR86ivLOavGzCLAFNAALAtdD0IrdVeg';

  key = 'AIzaSyCuwENWB9D1yZo1W0VONjWq4osmBhL4mF8';

  // center=40.714728,-73.998672&zoom=12&size=400x400&key=AIzaSyBtrR86ivLOavGzCLAFNAALAtdD0IrdVeg;
  // const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCuwENWB9D1yZo1W0VONjWq4osmBhL4mF8&input=${value}`;

  Birds: Bird[] = [];
  constructor(
    private http: HttpClient,
  ) { }


  

  getBirds(): Observable<{items:Bird[]}> {
    return this.http.get<any>(this.birdsUrl);
  }

  getStaticLocation(lat:number, lng:number,zoom: number){
    return `${this.StaticLocationUrl}center=${lat},${lng}&zoom=${zoom}&size=400x400&key=${this.key}`;
  }

  // getBirdLocation(lat:number,lng: number) Observable<Object> {
  //   return  this.http.get<Object>(`${this.birdLocationUrl}latlng=${lat},${lng}&key=YOUR_API_KEY`);
  // }
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

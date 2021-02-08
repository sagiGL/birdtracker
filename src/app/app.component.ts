import { Component } from '@angular/core';
import { Bird } from './birds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'any';
  birdInfo?: Bird;
  openBirdInfo(b:{bird:Bird, e:Event}) {
    this.birdInfo = b.bird;
  }
}

import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Bird, BirdService } from 'src/app/bird.service';

@Component({
  selector: 'bird-info',
  templateUrl: './bird-info.component.html',
  styleUrls: ['./bird-info.component.scss']
})
export class BirdInfoComponent implements OnInit {
  @Input() bird?: Bird;

  constructor(private birdService: BirdService) { }

  audio = new Audio();
  mapUrl?: string;

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges) {       
    this.newBird(changes?.categoryId?.currentValue);
  }

  newBird(birdName: string) {
    this.audio.pause();
    this.chifchif();
    if (this.bird) {
      this.mapUrl = this.birdService.getStaticLocation( this.bird.location.lat ,this.bird.location.lng,4);
    }

  }

  chifchif() {
    if (this.audio.paused && this.bird) {
      this.audio.src = this.bird.sound;
      this.audio.load();
      this.audio.play();
    }  else {
      this.audio.pause();
    }
  }
}

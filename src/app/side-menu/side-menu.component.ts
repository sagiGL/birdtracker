import { Component, EventEmitter, OnInit, Output, HostListener, ViewChild, ViewChildren, ElementRef  } from '@angular/core';
import { Bird, BirdsService } from '../birds.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() clickEmitter = new EventEmitter<any>();

  loading: boolean = true;
  birds: Bird[] = [];
  currentBird?: Bird;
  menuFrame: any;
  @ViewChild('scrollframe', {static: false}) scrollFrame?: ElementRef;

  constructor(public birdsService: BirdsService) {}

  ngOnInit(): void {
    this.birdsService.getBirds().subscribe( res => {
      this.birds.push(...res.items);
      this.showBirdInfo(this.birds[0]);
      this.loading = false;
    });
  }
  ngAfterViewInit() {
    this.menuFrame = this.scrollFrame?.nativeElement;
  }
  
  showBirdInfo(bird: Bird){
    this.clickEmitter.emit({bird})
    this.currentBird = bird;
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
      if (this.loading === false && this.menuFrame.offsetHeight + this.menuFrame.scrollTop >= this.menuFrame.scrollHeight - 20 ) {
        this.loading = true;
        this.birdsService.getBirds().subscribe( res => {
          this.birds.push(...res.items);
          this.loading = false;
        });
      }
  }
}

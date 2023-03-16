import { Component, Input, OnInit } from '@angular/core';
// import { SplashAnimationType } from "./splash-animation-type";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  windowWidth!: string;
  showSplash = true;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 3;
  // @Input() animationType: SplashAnimationType = SplashAnimationType.SlideLeft;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 3000);
  }

}

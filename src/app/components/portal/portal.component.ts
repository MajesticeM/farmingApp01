import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  isWeb = false;
  isWebLandscape = false;
  isHandsetPotrait = false;
  isHandsetLandscape = false;
  isTabletPotrait = false;
  isTabletLandscape = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletPortrait,
      ])
        .subscribe(result => {
  
          this.isWeb = false;
          this.isWebLandscape = false;
          this.isHandsetPotrait = false;
          this.isHandsetLandscape = false;
          this.isTabletPotrait = false;
          this.isTabletLandscape = false;
  
          const breakpoints = result.breakpoints;
          if (breakpoints[Breakpoints.TabletPortrait]) {
            console.log("screens matches TabletPortrait");
            this.isTabletPotrait = true
          }
          else if (breakpoints[Breakpoints.TabletLandscape]) {
            console.log("screens matches TabletLandscape");
            this.isTabletLandscape = true;
          }
          else if (breakpoints[Breakpoints.HandsetPortrait]) {
            console.log("screens matches HandsetPortrait");
            this.isHandsetPotrait = true;
          }
          else if (breakpoints[Breakpoints.HandsetLandscape]) {
            console.log("screens matches HandsetLandscape");
            this.isHandsetLandscape = true;
          }else if(breakpoints[Breakpoints.Web]){
            console.log("screens matches web");
            this.isWeb = true
          }
        });
  }

  cardClick(page: string) {
    console.log("clicked page" + page)
    if (page === "planting") {
      this.router.navigate(['/plantingSchedule']);
    } else if (page === "spraying") {
      this.router.navigate(['/spraying']);
    } else if (page === "growth") {
      this.router.navigate(['/growth']);
    } else if (page === "harvest") {
      this.router.navigate(['/harvest']);
    }else if (page === "requisition") {
      this.router.navigate(['/requisition']);
    }
  }
}

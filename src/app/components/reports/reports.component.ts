import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},


];


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  isWeb = false;
  isWebLandscape = false;
  isHandsetPotrait = false;
  isHandsetLandscape = false;
  isTabletPotrait = false;
  isTabletLandscape = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

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
    }
  }

}

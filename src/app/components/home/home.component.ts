import { BreakpointObserver, MediaMatcher, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  template: `
    <mat-toolbar color="primary">Farmer's Portal</mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true">
        <ul>
          <li>Dashboard</li>
          <li>Planting schedule</li>
          <li>Spray schedule</li>
          <li>Growth tracking</li>
          <li>Harvest</li>
          <li>Messages</li>
          <li>Videos</li>
          <li>Support</li>
          <li> <button class="btn btn-lohin" (click)="logout()">Logout</button></li>
        </ul>
       
      </mat-sidenav>
      <mat-sidenav-content>
        
        <mat-card>
          <mat-card-header>
            <mat-card-title>Card Title</mat-card-title>
            <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            Card content goes here
          </mat-card-content>
        </mat-card>
        <mat-card>
          <mat-card-header>
            <mat-card-title>Card Title</mat-card-title>
            <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            Card content goes here
          </mat-card-content>
        </mat-card>
        <mat-card>
          <mat-card-header>
            <mat-card-title>Card Title</mat-card-title>
            <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            Card content goes here
          </mat-card-content>
        </mat-card>
        <mat-card>
          <mat-card-header>
            <mat-card-title>Card Title</mat-card-title>
            <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            Card content goes here
          </mat-card-content>
        </mat-card>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    mat-sidenav-container {
      height: calc(100vh - 64px);
     
    }
    li
    {
      margin-top:47px;
      list-style:none;
      color:white;
      font-size:20px;
      margin-right:10px;
    }
    mat-sidenav {
      width: 200px;
      background-color:black;
    }
    mat-card {
      margin: 16px;
    }
  `]
})
export class HomeComponent implements OnInit {

  isWeb = false;
  isWebLandscape = false;
  isHandsetPotrait = false;
  isHandsetLandscape = false;
  isTabletPotrait = false;
  isTabletLandscape = false;
  hideFooter = false
  mobileQuery: MediaQueryList | undefined;

  constructor(private responsive: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router) { }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
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
        this.hideFooter = false

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
        } else if (breakpoints[Breakpoints.Web]) {
          console.log("screens matches web");
          this.isWeb = true
          this.hideFooter = true
        }
      });
  }
logout()
{
  this.router.navigate(['./login']);
}
}

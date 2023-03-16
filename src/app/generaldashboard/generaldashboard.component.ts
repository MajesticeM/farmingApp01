import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-generaldashboard',
  template: `
    <mat-toolbar color="primary">Business Portal</mat-toolbar>
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
          <li> <button (click)="logout()">Logout</button></li>
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

export class GeneraldashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }
  hidden = false;

  ngOnInit(): void {
  }

logout()
{
  this.router.navigate(['./login']);
}
}

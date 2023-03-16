import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  selectedDate: any;
  selected!: Date | null;
  showBackArrow = true;
  @Input() title: string;

  constructor(    private route: ActivatedRoute,
    private router: Router,
    private _location: Location) {
      this.title = ""
     }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
}

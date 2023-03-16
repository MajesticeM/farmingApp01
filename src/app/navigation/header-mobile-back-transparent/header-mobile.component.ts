import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-mobile-back-transparent',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileBackTransComponent implements OnInit {

  // You will want to hide and show a back-arrow depending on navigation state, if linking to other components from within the components
  // Not handling that in this demo.  Just leaving it here for illustration purposes
  showBackArrow = true;

  constructor(    private route: ActivatedRoute,
    private router: Router,
    private _location: Location) { }

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
  }

  onChangeProfileImage() {
    this.router.navigateByUrl('/profile/personal');
  }

}

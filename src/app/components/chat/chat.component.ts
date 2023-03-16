import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

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

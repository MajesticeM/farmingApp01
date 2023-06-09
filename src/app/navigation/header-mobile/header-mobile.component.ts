import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  // You will want to hide and show a back-arrow depending on navigation state, if linking to other components from within the components
  // Not handling that in this demo.  Just leaving it here for illustration purposes
  showBackArrow = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onChangeProfileImage() {
    this.router.navigateByUrl('/profile/personal');
  }

  onToggleSidenav = () => {
    this.sidenavToggle.emit(); // Emit event to parent component so it can open/close sidenav
  }
  profileClick(){
    console.log("dsfsdf")
    this.router.navigate(['/profile']);
  }
}

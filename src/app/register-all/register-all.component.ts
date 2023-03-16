import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-all',
  templateUrl: './register-all.component.html',
  styleUrls: ['./register-all.component.scss']
})
export class RegisterAllComponent implements OnInit {
  form: any;
  loading = false;
  submitted = false;
  isWeb = false;
  isWebLandscape = false;
  isHandsetPotrait = false;
  isHandsetLandscape = false;
  isTabletPotrait = false;
  isTabletLandscape = false;

  constructor(private responsive: BreakpointObserver,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

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
  onSubmit(value: any) {
    console.log("sdfsdf")
    this.router.navigate(['/home']);
  }
 
  register(){
    this.router.navigate(['/register']);
  }

  registerAll(){
    this.router.navigate(['/register-all']);
  }
  registerGeneral(){
    this.router.navigate(['/general-register']);
  }
  registerManufacturer(){
    this.router.navigate(['/manufacturer']);
  }
  onLogin(){
    this.router.navigate(['/login']);
  }
}

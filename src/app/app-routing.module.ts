import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/portal/portal.component';
import { HomeComponent } from './components/home/home.component';
import { LiveSupportComponent } from './components/live-support/live-support.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PlantingScheduleComponent } from './components/planting-schedule/planting-schedule.component';
import { SprayScheduleComponent } from './components/spray-schedule/spray-schedule.component';
import { GrowthTrackingComponent } from './components/growth-tracking/growth-tracking.component';
import { HarvestComponent } from './components/harvest/harvest.component';
import { ChatComponent } from './components/chat/chat.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RequisitionComponent } from './components/requisition/requisition.component';
import { LiveSupportChatComponent } from './components/live-support-chat/live-support-chat.component';
import { MainComponent } from './components/main/main.component';
import { RegisterAllComponent } from './register-all/register-all.component';
import { GeneralRegisterComponent } from './general-register/general-register.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { GeneraldashboardComponent } from './generaldashboard/generaldashboard.component'; 
import { ManufacturerdashboardComponent } from './manufacturerdashboard/manufacturerdashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-all', component: RegisterAllComponent },
  { path: 'general-register', component: GeneralRegisterComponent },
  { path: 'manufacturer', component: ManufacturerComponent },
  { path: 'growth', component: GrowthTrackingComponent },
  { path: 'harvest', component: HarvestComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'spraying', component: SprayScheduleComponent },
  { path: 'live-support-chat', component: LiveSupportChatComponent },
  { path: 'requisition', component: RequisitionComponent },
  { path: 'splash', component: SplashScreenComponent },
  { path: 'generaldashboard', component: GeneraldashboardComponent },
  { path: 'manufacturerdashboard', component: ManufacturerdashboardComponent },
  {
    path: 'planting',
    component: PlantingScheduleComponent
  }
  ,
  {
    path: 'portal',
    component: PortalComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },

  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'support',
    component: LiveSupportComponent
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainComponent
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

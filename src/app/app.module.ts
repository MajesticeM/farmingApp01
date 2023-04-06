import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BottomNavModule } from 'ngx-bottom-nav';
import { HttpClientModule } from '@angular/common/http';
import { HeaderMobileComponent } from './navigation/header-mobile/header-mobile.component';
import { FooterMobileComponent } from './navigation/footer-mobile/footer-mobile.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { LiveSupportComponent } from './components/live-support/live-support.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PortalComponent } from './components/portal/portal.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PlantingScheduleComponent } from './components/planting-schedule/planting-schedule.component';
import { SprayScheduleComponent } from './components/spray-schedule/spray-schedule.component';
import { GrowthTrackingComponent } from './components/growth-tracking/growth-tracking.component';
import { HarvestComponent } from './components/harvest/harvest.component';
import { HeaderMobileBackComponent } from './navigation/header-mobile-back/header-mobile.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { ChatComponent } from './components/chat/chat.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { ProfileComponent } from './components/profile/profile.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RegisterComponent } from './components/register/register.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RequisitionComponent } from './components/requisition/requisition.component';
import { LiveSupportChatComponent } from './components/live-support-chat/live-support-chat.component';
import { MainComponent } from './components/main/main.component';
import { GeneralRegisterComponent } from './general-register/general-register.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { RegisterAllComponent } from './register-all/register-all.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { GeneraldashboardComponent } from './generaldashboard/generaldashboard.component';
import { ManufacturerdashboardComponent } from './manufacturerdashboard/manufacturerdashboard.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    SidenavComponent,
    LiveSupportComponent,
    MessagesComponent,
    PortalComponent,
    ReportsComponent,
    PlantingScheduleComponent,
    SprayScheduleComponent,
    GrowthTrackingComponent,
    HarvestComponent,
    HeaderMobileBackComponent,
    ChatComponent,
    SplashScreenComponent,
    ProfileComponent,
    RegisterComponent,
    RequisitionComponent,
    LiveSupportChatComponent,
    MainComponent,
    GeneralRegisterComponent,
    ManufacturerComponent,
    RegisterAllComponent,
    GeneraldashboardComponent,
    ManufacturerdashboardComponent,
    //AngularFirestore,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    ReactiveFormsModule,
    BottomNavModule,
    MatNativeDateModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatExpansionModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
    MatNativeDateModule,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

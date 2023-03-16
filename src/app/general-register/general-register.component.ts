import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/services/generalBusiness.service';
import { Business } from 'src/models/business';
import { error } from 'console';

@Component({
  selector: 'app-general-register',
  templateUrl: './general-register.component.html',
  styleUrls: ['./general-register.component.scss']
})
export class GeneralRegisterComponent implements OnInit {
  business!:Business;
  panelOpenState = false;
  toppings = new FormControl();
  toppings2 = new FormControl();
  toppings3 = new FormControl();
  toppingList: string[] = ['Borehole', 'Reservoir', 'Draw water from the river', 'Irrigation scheme'];
  toppingList2: string[] = ['Tractor', 'Plantor', 'Plough', 'Digger','Disc Ridger','Harvester','Sprayer','Tiller'];
  toppingList3: string[] = ['Land Preparation Training', 'Chemical Handling Training', 'Food Safety Training', 'Financial Record Keeping','First Aid Training','Tractor Handling Training','Plant Production Training','Administration Recordkeeping', 'Local Gap Training','International Gap Training'];
 
  isWeb = false;
  isWebLandscape = false;
  isHandsetPotrait = false;
  isHandsetLandscape = false;
  isTabletPotrait = false;
  isTabletLandscape = false;


  constructor(private responsive: BreakpointObserver,
    
    private route: ActivatedRoute,
    private organization:BusinessService,
    private router: Router) { }


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
            this.isWeb = true;
          }
        });
  }
  //Business owner information
  NameSurname!:string;
  IDNumber!:string;
  cell!:number;
  email!:string;
  YearsOfExperience!:string;
  levelOfEducation!:string;

  //Business information
  businessName!:string;
  businessType!:string;
  registrationNumber!:string;
  BriefDescription!:string;
  manufacturedProducts!:string;
  businessStage!:string;
  marketAccess!:string;
  currentMarketDescription!:string;
  desiredMarketDesription!:string;

  //Business admin
  idOfDirectors!:string;
  cipc!:string;

  //Business Site Information
  businessAddress!:string;
  Municipality!:string;
  province!:string;
  outputproduced!:string;
  operationEquipment!:string;
  specialisedEquipment!:string;
  neededMachines!:string;

  //Financial compliance
  financialStatements!:string;
  managementStatements!:string;
  taxClearance!:string;

  //Training and Development
  trainingDevelopment!:string;

  addBusiness()
  {
    this.business=
    {
      formType:"Business",
      BusinessOwnerInformation:
      {
        NameSurname:this.NameSurname,
        IDNumber:this.IDNumber,
        cell:this.cell,
        email:this.email,
        //YearsOfExperience:this.YearsOfExperience,
        levelOfEducation:this.levelOfEducation,
      },

      BusinessInformation:
      {
        businessName:this.businessName,
        businessType:this.businessType,
        registrationNumber:this.registrationNumber,
        BriefDescription:this.BriefDescription,
        manufacturedProducts:this.manufacturedProducts,
        businessStage:this.businessStage,
        marketAccess:this.marketAccess,
        currentMarketDescription:this.currentMarketDescription,
        desiredMarketDesription:this.desiredMarketDesription,
      },

      /*BusinessAdmin:
      {
        idOfDirectors:this.idOfDirectors,
        cipc:this.cipc,
      },*/

      BusinessSiteInformation:
      {
        businessAddress:this.businessAddress,
        Municipality:this.Municipality,
        province:this.province,
        outputproduced:this.outputproduced,
        operationEquipment:this.operationEquipment,
        specialisedEquipment:this.specialisedEquipment,
        neededMachines:this.neededMachines,
      },

      FinancialCompliance:
      {
        financialStatements:this.financialStatements,
        managementStatements:this.managementStatements,
        taxClearance:this.taxClearance,
      },

      TrainingDevelopment:
      {
        trainingDevelopment:this.trainingDevelopment,
      },
    
    }

  }

 
  
  onFileSelected($event: any) {
    console.log("file chosen")
  }
  selectFile(event: any): void {

  }

  upload(): void {

  }
 

  onLogin(){
    this.router.navigate(['/login']);
  }

  register()
  {
    console.log("onRegister"); 
    this.business={
      formType:"Business",
      BusinessOwnerInformation:
      {
        NameSurname:this.NameSurname,
        IDNumber:this.IDNumber,
        cell:this.cell,
        email:this.email,
       // YearsOfExperience:this.YearsOfExperience,
        levelOfEducation:this.levelOfEducation,
      },

      BusinessInformation:
      {
        businessName:this.businessName,
        businessType:this.businessType,
        registrationNumber:this.registrationNumber,
        BriefDescription:this.BriefDescription,
        manufacturedProducts:this.manufacturedProducts,
        businessStage:this.businessStage,
        marketAccess:this.marketAccess,
        currentMarketDescription:this.currentMarketDescription,
        desiredMarketDesription:this.desiredMarketDesription,
      },

     /* BusinessAdmin:
      {
        idOfDirectors:this.idOfDirectors,
        cipc:this.cipc,
      },*/

      BusinessSiteInformation:
      {
        businessAddress:this.businessAddress,
        Municipality:this.Municipality,
        province:this.province,
        outputproduced:this.outputproduced,
        operationEquipment:this.operationEquipment,
        specialisedEquipment:this.specialisedEquipment,
        neededMachines:this.neededMachines,
      },

      FinancialCompliance:
      {
        financialStatements:this.financialStatements,
        managementStatements:this.managementStatements,
        taxClearance:this.taxClearance,
      },

      TrainingDevelopment:
      {
        trainingDevelopment:this.trainingDevelopment,
      },
      
    }
    console.log(this.business);
    this.organization.addBusiness(this.business)
    .then(result =>{
      console.log("Registration saved");
    }).catch(error =>{
      console.log("Registration failed");
    })
  }  
}

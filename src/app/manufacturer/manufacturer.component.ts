import { Component, OnInit } from '@angular/core';
import { FormControl ,FormsModule} from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Manufacturer } from 'src/models/manufacturer';
import { error } from 'console';
import { BusinessService } from 'src/services/generalBusiness.service';
import { ManufacturerService } from 'src/services/manufacturer.service';


@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss']
})
export class ManufacturerComponent implements OnInit {

  manufacturer!:Manufacturer;
  panelOpenState = false;
  toppings = new FormControl();
  toppings2 = new FormControl();
  toppings3 = new FormControl();
 
  isWeb = false;
  isWebLandscape = false;
  isHandsetPotrait = false;
  isHandsetLandscape = false;
  isTabletPotrait = false;
  isTabletLandscape = false;

  constructor(private responsive: BreakpointObserver,
    
    private route: ActivatedRoute,
    private organization:ManufacturerService,
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
            this.isWeb = true
          }
        });
  }
//Manufacturer Registration
FirstName!:string;
ID!:string;
cell!:string;
email!:string;
levelOfEducation!:string;

//Manufacturer information
manufacturerName!:string;
businessType!:string;
registrationNumber!:string;
BusinessDescription!:string;
manufacturedProducts!:string;
manufacturingStage!:string;
marketAccess!:string;
descriptionOfCurrentMarket!:string;
descriptionOfDesiredMarket!:string;

//Manufacturer admin
IDofDirectors!:string;
cipc!:string;

//Manufacturing site information
manufacturerAddress!:string;
municipality!:string;
province!:string;
outputProducedPerWeek!:string;
productionMachineryDescription!:string;
productionInputDescription!:string;
machineDoTheyHave!:string;
machinesDoYouNeed!:string;

//Financial compliance
financialStatements!:string;
managementAccounts!:string;
taxClearanceCertificate!:string;

//Training and development
trainingDevelopment!:string;

addManufacturer()
{
  this.manufacturer=
  {
    formType:"manufacturer",
    manufacturerRegistration:
    {
      FirstName:this.FirstName,
      ID:this.ID,
      cell:this.cell,
      email:this.email,
      levelOfEducation:this.levelOfEducation,
    },

    manufacturerInformation:
    {
      manufacturerName:this.manufacturerName,
      businessType:this.businessType,
      registrationNumber:this.registrationNumber,
      BusinessDescription:this.BusinessDescription,
      manufacturedProducts:this.manufacturedProducts,
      manufacturingStage:this.manufacturingStage,
      marketAccess:this.marketAccess,
      descriptionOfCurrentMarket:this.descriptionOfCurrentMarket,
      descriptionOfDesiredMarket:this.descriptionOfDesiredMarket,
    },

   /* manufacturerAdmin:
    {
      IDofDirectors:this.IDofDirectors,
      cipc:this.cipc,
    },*/

    manufacturerSiteInformation:
    {
      manufacturerAddress:this.manufacturerAddress,
      municipality:this.municipality,
      province:this.province,
      outputProducedPerWeek:this.outputProducedPerWeek,
      productionMachineryDescription:this.productionMachineryDescription,
      productionInputDescription:this.productionInputDescription,
      machineDoTheyHave:this.machineDoTheyHave,
      machinesDoYouNeed:this.machinesDoYouNeed,
    },

    financialCompliance:
    {
      financialStatements:this.financialStatements,
      managementAccounts:this.managementAccounts,
      taxClearanceCertificate:this.taxClearanceCertificate,
    },

    trainingDevelopment:
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
  register(){

    this.manufacturer=
    {
      formType:"manufacturer",
      manufacturerRegistration:
      {
        FirstName:this.FirstName,
        ID:this.ID,
        cell:this.cell,
        email:this.email,
        levelOfEducation:this.levelOfEducation,
      },
  
      manufacturerInformation:
      {
        manufacturerName:this.manufacturerName,
        businessType:this.businessType,
        registrationNumber:this.registrationNumber,
        BusinessDescription:this.BusinessDescription,
        manufacturedProducts:this.manufacturedProducts,
        manufacturingStage:this.manufacturingStage,
        marketAccess:this.marketAccess,
        descriptionOfCurrentMarket:this.descriptionOfCurrentMarket,
        descriptionOfDesiredMarket:this.descriptionOfDesiredMarket,
      },
  
     /* manufacturerAdmin:
      {
        IDofDirectors:this.IDofDirectors,
        cipc:this.cipc,
      },*/
  
      manufacturerSiteInformation:
      {
        manufacturerAddress:this.manufacturerAddress,
        municipality:this.municipality,
        province:this.province,
        outputProducedPerWeek:this.outputProducedPerWeek,
        productionMachineryDescription:this.productionMachineryDescription,
        productionInputDescription:this.productionInputDescription,
        machineDoTheyHave:this.machineDoTheyHave,
        machinesDoYouNeed:this.machinesDoYouNeed,
      },
  
      financialCompliance:
      {
        financialStatements:this.financialStatements,
        managementAccounts:this.managementAccounts,
        taxClearanceCertificate:this.taxClearanceCertificate,
      },
  
      trainingDevelopment:
      {
        trainingDevelopment:this.trainingDevelopment,
      },
    }
  
    console.log(this.manufacturer);
    this.organization.addManufacturer(this.manufacturer)
    .then(result =>{
      console.log("Registration saved");
    }).catch(error =>{
      console.log("Registration failed");
    })
  }
  onLogin(){
    this.router.navigate(['/login']);
  }
}

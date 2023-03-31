import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmService } from 'src/services/farm.service';
import { Farm } from 'src/models/farm';
import { error } from 'console';
import * as firebase from 'firebase/compat';
import 'firebase/compat/storage';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  farm!: Farm;
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
    private httpClient: HttpClient,
    private organization:FarmService,
    private router: Router) { }

  ngOnInit(): void 
  {
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
  parentOrganization!:any;
  NameSurname!:string;
  IDNumber!:string;
  cell!:number;
  email!:string;
  YearsOfExperience!:string;
  levelOfEducation!:string;
  FarmName!:string;
  FarmType!:string;
  RegistrationNumber!:string;
  nameOfLocalSupplier!:string;
  serviceLocalTheyProvide!:string;
  nameOfMechanismSupplier!:string;
  serviceMechanismTheyProvide!:string;
  BusinessType!:string;


  //Farm documents
  IdOfDirector!:string;
  CIPCRegistration!:string;
  copyOfTitleDeed!:string;
  waterRights!:string;
  PUC!:string;
  otherDocs!:string;

  //Farm site information
  farmCountry!:string;
  farmProvince!:string;
  farmMunicipality!:string;
  farmAddress!:string;
  lastSoilTest!:string;
  lastSoilTestProvider!:string;
  lastWaterTest!:string;
  lastWaterTestProvider!:string;
  Yield01!:string;
  Yield02!:"string";
  Yield03!:"string";
  totalNumberOfHectares!:string;
  currentPlant!:string;
  availableHectares!:string;
  accessToFarm!:string;
  hectaresPlanted!:string;
  yieldPerHectare!:string;
  seedUsed!:string;
  seedCertified!:string;
  fertilizerUsed!:string;
  herbicideUsed!:string;
  fungicideUsed!:string;
  pesticideUsed!:string;
  agroChemicalsUsed!:string;

  //Farm Infrastructure
  waterSource!:string;
  estimatedWaterCapacity!:string;
  WaterSourceSustainability!:string;
  permitsOrLicenses!:string;
  typeOfIrrigation!:string;
  agroMachinery!:string;
  manualFunctions!:string;

  //Financial compliance
  financialStatements!:string;
  latestManagementAccount!:string;
  taxClearanceCertificate!:string;

  //Training and development
  AgriTraining!:string;
  addFarm()
  {
    this.farm=
    {
      formType:"Farm",
      parentOrganization:this.parentOrganization,
      farmerProfile:
      {
        NameSurname:this.NameSurname,
        IDNumber:this.IDNumber,
        cell:this.cell,
        email:this.email,
        YearsOfExperience:this.YearsOfExperience,
        levelOfEducation:this.levelOfEducation,
        
      },

      farmInformation:
      {
        FarmName:this.FarmName,
        FarmType:this.FarmType,
        RegistrationNumber:this.RegistrationNumber,
        nameOfLocalSupplier:this.nameOfLocalSupplier,
        serviceLocalTheyProvide:this.serviceLocalTheyProvide,
        nameOfMechanismSupplier:this.nameOfMechanismSupplier,
        serviceMechanismTheyProvide:this.serviceMechanismTheyProvide,
        BusinessType:this.BusinessType,
      },

     /* farmDocuments:
      {
        IdOfDirector:this.IdOfDirector,
        CIPCRegistration:this.CIPCRegistration,
        copyOfTitleDeed:this.copyOfTitleDeed,
        waterRights:this.waterRights,
        PUC:this.PUC,
        otherDocs:this.otherDocs,
      },*/

      farmSiteInformation:
      {
        farmCountry:this.farmCountry,
        farmProvince:this.farmProvince,
        farmMunicipality:this.farmMunicipality,
        farmAddress:this.farmAddress,
        lastSoilTest:this.lastSoilTest,
        lastSoilTestProvider:this.lastSoilTestProvider,
        lastWaterTest:this.lastWaterTest,
        lastWaterTestProvider:this.lastWaterTestProvider,
        Yield01:this.Yield01,
        Yield02:"this.Yield02",
        Yield03:"this.Yield03",
        totalNumberOfHectares:this.totalNumberOfHectares,
        currentPlant:this.currentPlant,
        availableHectares:this.availableHectares,
        accessToFarm:this.accessToFarm,
        hectaresPlanted:this.hectaresPlanted,
        yieldPerHectare:this.yieldPerHectare,
        seedUsed:this.seedUsed,
        seedCertified:this.seedCertified,
        fertilizerUsed:this.fertilizerUsed,
        herbicideUsed:this.herbicideUsed,
        fungicideUsed:this.fungicideUsed,
        pesticideUsed:this.pesticideUsed,
        agroChemicalsUsed:this.agroChemicalsUsed,

      },

      farmInfrastructure:
      {
        waterSource:this.waterSource,
        estimatedWaterCapacity:this.estimatedWaterCapacity,
        WaterSourceSustainability:this.WaterSourceSustainability,
        permitsOrLicenses:this.permitsOrLicenses,
        typeOfIrrigation:this.typeOfIrrigation,
        agroMachinery:this.agroMachinery,
        manualFunctions:this.manualFunctions,
      },

      financialCompliance:
      {
        financialStatements:this.financialStatements,
        latestManagementAccount:this.latestManagementAccount,
        taxClearanceCertificate:this.taxClearanceCertificate,

      },

      trainingAndDevelopment:
      {
        AgriTraining:this.AgriTraining,
      },
    }
  }
 
  /*onFileSelected($event: any) {
    console.log("file chosen")
  }*/
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
  
    this.httpClient.get('/api/data').subscribe({
      next: (response) => console.log('Success:', response),
      error: (error) => console.log('Error:', error),
      complete: () => console.log('Request completed')
    });
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadFile(file);
  }
  upload(): void {

  }
  /*async uploadFile(file: File) {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    console.log('File uploaded successfully!');
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    this.uploadFile(file);
  }*/
  register()
  {
    console.log("onRegister");
    
    this.farm=
    {
      formType:"Farm",
      parentOrganization:this.parentOrganization,
      farmerProfile:
      {
        NameSurname:this.NameSurname,
        IDNumber:this.IDNumber,
        cell:this.cell,
        email:this.email,
        YearsOfExperience:this.YearsOfExperience,
        levelOfEducation:this.levelOfEducation,
      
      },

      farmInformation:
      {
        FarmName:this.FarmName,
        FarmType:this.FarmType,
        RegistrationNumber:this.RegistrationNumber,
        nameOfLocalSupplier:this.nameOfLocalSupplier,
        serviceLocalTheyProvide:this.serviceLocalTheyProvide,
        nameOfMechanismSupplier:this.nameOfMechanismSupplier,
        serviceMechanismTheyProvide:this.serviceMechanismTheyProvide,
        BusinessType:this.BusinessType,
      },

        /* farmDocuments:
          {
            IdOfDirector:this.IdOfDirector,
            CIPCRegistration:this.CIPCRegistration,
            copyOfTitleDeed:this.copyOfTitleDeed,
            waterRights:this.waterRights,
            PUC:this.PUC,
            otherDocs:this.otherDocs,
          },*/

      farmSiteInformation:
      {
        farmCountry:this.farmCountry,
        farmProvince:this.farmProvince,
        farmMunicipality:this.farmMunicipality,
        farmAddress:this.farmAddress,
        lastSoilTest:this.lastSoilTest,
        lastSoilTestProvider:this.lastSoilTestProvider,
        lastWaterTest:this.lastWaterTest,
        lastWaterTestProvider:this.lastWaterTestProvider,
        Yield01:this.Yield01,
        Yield02:"this.Yield02",
        Yield03:"this.Yield03",
        totalNumberOfHectares:this.totalNumberOfHectares,
        currentPlant:this.currentPlant,
        availableHectares:this.availableHectares,
        accessToFarm:this.accessToFarm,
        hectaresPlanted:this.hectaresPlanted,
        yieldPerHectare:this.yieldPerHectare,
        seedUsed:this.seedUsed,
        seedCertified:this.seedCertified,
        fertilizerUsed:this.fertilizerUsed,
        herbicideUsed:this.herbicideUsed,
        fungicideUsed:this.fungicideUsed,
        pesticideUsed:this.pesticideUsed,
        agroChemicalsUsed:this.agroChemicalsUsed,

      },

      farmInfrastructure:
      {
        waterSource:this.waterSource,
        estimatedWaterCapacity:this.estimatedWaterCapacity,
        WaterSourceSustainability:this.WaterSourceSustainability,
        permitsOrLicenses:this.permitsOrLicenses,
        typeOfIrrigation:this.typeOfIrrigation,
        agroMachinery:this.agroMachinery,
        manualFunctions:this.manualFunctions,
      },

      financialCompliance:
      {
        financialStatements:this.financialStatements,
        latestManagementAccount:this.latestManagementAccount,
        taxClearanceCertificate:this.taxClearanceCertificate,

      },

      trainingAndDevelopment:
      {
        AgriTraining:this.AgriTraining,
      },
      
    }
    console.log(this.farm);
    this.organization.addFarm(this.farm)
    .then(result =>{
      console.log("Registration saved");
    }).catch(error =>{
      console.log("Registration failed");
    })
  }

  onLogin()
  {
    this.router.navigate(['/login']);
  }
}

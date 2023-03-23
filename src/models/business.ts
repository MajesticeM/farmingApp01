import { FileDocument } from "./file-document";
import { FinancialCompliance } from "./financial-compliance";
import { TrainingDevelopment } from "./training-development";



export interface Business
{
  formType:"Business",
  parentOrganization:any,

   //Business owner information
   BusinessOwnerInformation:
   {
    NameSurname:string,
    IDNumber:string,
    cell:number,
    email:string,
   // YearsOfExperience:string,
    levelOfEducation:string,
   },
  

  //Business information
  BusinessInformation:
  {
    businessName:string,
    businessType:string,
    registrationNumber:string,
    BriefDescription:string,
    manufacturedProducts:string,
    businessStage:string,
    marketAccess:string,
    currentMarketDescription:string,
    desiredMarketDesription:string,
  },


  //Business admin
 /* BusinessAdmin:
  {
    idOfDirectors:string,
    cipc:string,
  },*/
  

  //Business Site Information
  BusinessSiteInformation:
  {
    businessAddress:string,
    Municipality:string,
    province:string,
    outputproduced:string,
    operationEquipment:string,
    specialisedEquipment:string,
    neededMachines:string,
  },


  //Financial compliance
  FinancialCompliance:
  {
    financialStatements:string,
    managementStatements:string,
    taxClearance:string,
  },


  //Training and Development
  TrainingDevelopment:
  {
    trainingDevelopment:string,
  },
}


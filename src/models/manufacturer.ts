import { Business } from "./business";
import { FileDocument } from "./file-document";
import { FinancialCompliance } from "./financial-compliance";
import { TrainingDevelopment } from "./training-development";




export interface Manufacturer
{
formType:"manufacturer",
parentOrganization:any,
//Manufacturer Registration
manufacturerRegistration:
{
    FirstName:string,
   
    ID:string,
    cell:string,
    email:string,
    levelOfEducation:string,
},

//Manufacturer information
manufacturerInformation:
{
    manufacturerName:string,
    businessType:string,
    registrationNumber:string,
    BusinessDescription:string,
    manufacturedProducts:string,
    manufacturingStage:string,
    marketAccess:string,
    descriptionOfCurrentMarket:string,
    descriptionOfDesiredMarket:string,
}

//Manufacturer admin
/*manufacturerAdmin:
{
    IDofDirectors:string,
    cipc:string,
},*/


//Manufacturing site information
manufacturerSiteInformation:
{
    manufacturerAddress:string,
    municipality:string,
    province:string,
    outputProducedPerWeek:string,
    productionMachineryDescription:string,
    productionInputDescription:string,
    machineDoTheyHave:string,
    machinesDoYouNeed:string,
}


//Financial compliance
financialCompliance:
{
    financialStatements:string,
    managementAccounts:string,
    taxClearanceCertificate:string,
}


//Training and development
trainingDevelopment:
{
    trainingDevelopment:string,
}
}


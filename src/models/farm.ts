import { Business } from "./business";
import { FileDocument } from "./file-document";
import { FinancialCompliance } from "./financial-compliance";
import { TrainingDevelopment } from "./training-development";


/*export interface Farm {
    businessType: string
    description: string
    farm_infrastructure: {
        irrigationInfrastructure: string,
        levelOfMachinery: string[],
        mineralProcesses: string[],
        waterAccess: string,
        waterSource: string,
        waterSourceCapacity: string,
        waterSourceSustainability: string
    }
   
    name: string
    profile_picture: string
    registrationNo: string
    training_developments: {
        agriTrainingDone: string[],
        agriTrainingRequired: string[],
        otherTraining: string[]
    }
    financial_acompliance: {
        hasFinancialStatement: boolean,
        hasManagementAccounts: boolean,
        hasTaxClearance: boolean
    }
    regStatus: string
    score: string
    
}*/

export interface Farm
{
    formType:"Farm",
    parentOrganization:any,
    farmerProfile:
    {
        NameSurname:string,
        IDNumber:string,
        cell:number,
        email:string,
        YearsOfExperience:string,
        levelOfEducation:string,
    },
   
    farmInformation:
    {
    FarmName:string,
    FarmType:string,
    RegistrationNumber:string,
    nameOfLocalSupplier:string,
    serviceLocalTheyProvide:string,
    nameOfMechanismSupplier:string,
    serviceMechanismTheyProvide:string,
    BusinessType:string,
    },
  
    /*farmDocuments:
    {
    //Farm documents
    IdOfDirector:string,
    CIPCRegistration:string,
    copyOfTitleDeed:string,
    waterRights:string,
    PUC:string,
    otherDocs:string,
    },*/

    farmSiteInformation:
    {
    //Farm site information
    farmCountry:string,
    farmProvince:string,
    farmMunicipality:string,
    farmAddress:string,
    lastSoilTest:string,
    lastSoilTestProvider:string,
    lastWaterTest:string,
    lastWaterTestProvider:string,
    Yield01:string,
    Yield02:string,
    Yield03:string,
    totalNumberOfHectares:string,
    currentPlant:string,
    availableHectares:string,
    accessToFarm:string,
    hectaresPlanted:string,
    yieldPerHectare:string,
    seedUsed:string,
    seedCertified:string,
    fertilizerUsed:string,
    herbicideUsed:string,
    fungicideUsed:string,
    pesticideUsed:string,
    agroChemicalsUsed:string,
    },

    farmInfrastructure:
    {
    //Farm Infrastructure
    waterSource:string,
    estimatedWaterCapacity:string,
    WaterSourceSustainability:string,
    permitsOrLicenses:string,
    typeOfIrrigation:string,
    agroMachinery:string,
    manualFunctions:string,
    },

    financialCompliance:
    {
    //Financial compliance
    financialStatements:string,
    latestManagementAccount:string,
    taxClearanceCertificate:string,
    },

    trainingAndDevelopment:
    {
    //Training and development
    AgriTraining:string,
    },
}


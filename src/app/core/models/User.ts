import { Document } from "./Document";
export interface User {
    idUser?: number;
    nom: string;
    prenom: string;
    cin: number;
    email: string;
    numTel: number;
    password: string;
    documents?: Document[]; // Documents associés à l'utilisateur
    userAdminType?: UserAdminType; // Type d'utilisateur administrateur
    userPortType?: UserPortType; // Type d'utilisateur associé à un port
    port?: Port; // Port associé à l'utilisateur
    userRegionMaritimeType?: UserRegionMaritimeType; // Type d'utilisateur associé à une région maritime
    region?: Region; // Région maritime associée à l'utilisateur
}
  
  
  export enum UserAdminType {
    admin = 'admin',
    superAdmin = 'superAdmin'
  }
  
  export interface UserAdmin extends User {
    userAdminType: UserAdminType;
  }
  
  export enum Port {
    RADES = 'RADES',
    BIZERTE = 'BIZERTE',
    GOULETTE = 'GOULETTE',
    SOUSSE = 'SOUSSE',
    SFAX = 'SFAX',
    GABES = 'GABES',
    ZARZIS = 'ZARZIS'
  }
  
  export enum UserPortType {
    DIRECTEUR_DE_PORT = 'DIRECTEUR_DE_PORT',
    COORDINATEUR_QUALITE = 'COORDINATEUR_QUALITE',
    CHEF_DIVISION_EXPLOITATEUR = 'CHEF_DIVISION_EXPLOITATEUR',
    CHEF_SERVICE_EXPLOITATEUR = 'CHEF_SERVICE_EXPLOITATEUR',
    CHEF_DIVISION_CAPITAINERIE = 'CHEF_DIVISION_CAPITAINERIE',
    CHEF_SERVICE_ARMEMENT = 'CHEF_SERVICE_ARMEMENT',
    CHEF_SERVICE_SURETE_SECURITE = 'CHEF_SERVICE_SURETE_SECURITE',
    CHEF_DIVISION_TECHNIQUE = 'CHEF_DIVISION_TECHNIQUE',
    CHEF_SERVICE_MAINTENANCE = 'CHEF_SERVICE_MAINTENANCE',
    CHEF_DIVISION_ADMINISTRATIF_FINANCIER = 'CHEF_DIVISION_ADMINISTRATIF_FINANCIER',
    CHEF_SERVICE_ADMINISTRATIF = 'CHEF_SERVICE_ADMINISTRATIF',
    CHEF_SECTION_ACHAT = 'CHEF_SECTION_ACHAT',
    CHEF_SERVICE_FINANCIER = 'CHEF_SERVICE_FINANCIER',
    CHEF_SECTION_COMPTABILITE = 'CHEF_SECTION_COMPTABILITE',
    CHEF_DIVISION_GARRE_MARITIME = 'CHEF_DIVISION_GARRE_MARITIME',
    CHEF_SERVICE_GARRE_MARITIME = 'CHEF_SERVICE_GARRE_MARITIME'
}
  
  export interface UserPort extends User {
    port: Port;
    userPortType: UserPortType;
  }
  
  export enum Region {
    BIZERTE = 'BIZERTE',
    TUNIS = 'TUNIS',
    SOUSSE = 'SOUSSE',
    MONASTIR = 'MONASTIR',
    SFAX = 'SFAX',
    GABES = 'GABES',
    DJERBA = 'DJERBA'
  }
  
  export enum UserRegionMaritimeType {
    CHEF_REGION_MARITIME = 'CHEF_REGION_MARITIME',
    COORDINATEUR_QUALITE = 'COORDINATEUR_QUALITE',
    CHEF_DIVISION_SECURITE_MARITIME = 'CHEF_DIVISION_SECURITE_MARITIME',
    CHEF_SERVICE_SECURITE_MARITIME = 'CHEF_SERVICE_SECURITE_MARITIME',
    CHEF_QUARTIER = 'CHEF_QUARTIER',
    CHARGE_BUREAU_FLOTTE = 'CHARGE_BUREAU_FLOTTE',
    CHARGE_BUREAU_GENS_DE_MER = 'CHARGE_BUREAU_GENS_DE_MER',
    CHEF_SOUS_QUARTIER_MARITIME = 'CHEF_SOUS_QUARTIER_MARITIME',
    CHEF_QUARTIER_MARITIME = 'CHEF_QUARTIER_MARITIME'
}

  
  export interface UserRegionMaritime extends User {
    region: Region;
    userRegionMaritimeType: UserRegionMaritimeType;
  }
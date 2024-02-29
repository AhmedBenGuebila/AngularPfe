import { User } from "./User";

export interface Document {
  idDocument?: number;
  titre: string;
  dateCreation?: Date; 
  dateMiseAJour?: Date; 
  url: string;
  documentType: DocumentType;
  concerneType: ConcerneType;
  users?: User[];
}

export enum DocumentType {
procedure = 'procedure',
precess = 'precess',
instruction = 'instruction',
PQ = 'PQ',
MQ = 'MQ',
TB = 'TB'
}

export enum ConcerneType {
port = 'port',
regionMaritime = 'regionMaritime'
}
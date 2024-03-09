import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents.component';
import { FormDocumentsComponent } from './form-documents/form-documents.component';
import { ListDocumentsComponent } from './list-documents/list-documents.component'; 
import { AffecterUtilisateurComponent } from './affecter-utilisateur/affecter-utilisateur.component'; 

import { ListDocumentsUserComponent } from './list-documents-user/list-documents-user.component'; 
const routes: Routes = [
  {path: '', component: DocumentsComponent , children :[
    {path: 'add', component: FormDocumentsComponent},
    {path: 'admin-documents', component: ListDocumentsComponent},
    {path: 'affecter-utilisateur/:documentId', component: AffecterUtilisateurComponent},
    {path: 'user-documents', component: ListDocumentsUserComponent}
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }

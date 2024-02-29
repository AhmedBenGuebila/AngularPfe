import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents.component';
import { FormDocumentsComponent } from './form-documents/form-documents.component';
import { ListDocumentsComponent } from './list-documents/list-documents.component'; 
import { AffecterUtilisateurComponent } from './affecter-utilisateur/affecter-utilisateur.component'; 
const routes: Routes = [
  {path: '', component: DocumentsComponent , children :[
    {path: 'add', component: FormDocumentsComponent},
    {path: '', component: ListDocumentsComponent},
    {path: 'affecter-utilisateur/:documentId', component: AffecterUtilisateurComponent}

  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }

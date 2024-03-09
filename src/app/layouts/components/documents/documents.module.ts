import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { FormDocumentsComponent } from './form-documents/form-documents.component';
import { FormsModule } from '@angular/forms';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { AffecterUtilisateurComponent } from './affecter-utilisateur/affecter-utilisateur.component';
import { ListDocumentsUserComponent } from './list-documents-user/list-documents-user.component';

@NgModule({
  declarations: [
    DocumentsComponent,
    FormDocumentsComponent,
    ListDocumentsComponent,
    AffecterUtilisateurComponent,
    ListDocumentsUserComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    FormsModule // Ajoutez le module FormsModule ici
  ]
})
export class DocumentsModule { }

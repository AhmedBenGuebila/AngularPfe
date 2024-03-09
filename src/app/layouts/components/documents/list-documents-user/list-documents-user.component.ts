import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../../core/services/document.service';
import { Document } from '../../../../core/models/Document';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-documents-user',
  templateUrl: './list-documents-user.component.html',
  styleUrls: ['./list-documents-user.component.scss']
})
export class ListDocumentsUserComponent implements OnInit {

  documents: Document[] = [];
  userId: number; // Vous devez avoir l'ID de l'utilisateur pour récupérer ses documents

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
   
    this.userId = 1;
    this.getDocumentsForUser(this.userId);
  }

  getDocumentsForUser(userId: number): void {
    this.documentService.getAllDocumentsByUserId(userId)
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        },
        (error) => {
          console.error('Error fetching user documents:', error);
        }
      );
  }

  telechargerDocument(documentId: number): void {
    //Logique
  }

}

import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../../core/services/document.service';
import { Document, DocumentType, ConcerneType } from '../../../../core/models/Document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService,private router: Router) { }

  ngOnInit(): void {
    this.getAllDocuments();
  }

  getAllDocuments(): void {
    this.documentService.getAllDocuments()
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        },
        (error) => {
          console.error('Error fetching documents:', error);
        }
      );
  }
  redirectToAffecterUtilisateur(documentId: number): void {
    this.router.navigate(['/documents/affecter-utilisateur', documentId]);
}
}

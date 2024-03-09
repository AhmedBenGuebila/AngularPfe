import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../../core/services/document.service';
import { Document } from '../../../../core/models/Document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {
  documents: Document[] = [];
  filteredDocuments: Document[] = [];
  searchText: string = '';

  constructor(private documentService: DocumentService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDocuments();
  }

  getAllDocuments(): void {
    this.documentService.getAllDocuments()
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
          this.filteredDocuments = documents; // Initialiser les documents filtrés avec tous les documents au départ
        },
        (error) => {
          console.error('Error fetching documents:', error);
        }
      );
  }

  filterDocuments(): void {
    if (this.searchText.trim() === '') {
      // Si la recherche est vide, afficher tous les documents
      this.filteredDocuments = this.documents;
    } else {
      // Filtrer les documents en fonction du texte de recherche (titre)
      this.filteredDocuments = this.documents.filter(document =>
        document.titre.toLowerCase().includes(this.searchText.trim().toLowerCase())
      );
    }
  }

  redirectToAffecterUtilisateur(documentId: number): void {
    this.router.navigate(['/documents/affecter-utilisateur', documentId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../../core/services/document.service';
import { Document, DocumentType, ConcerneType } from '../../../../core/models/Document';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-documents',
  templateUrl: './form-documents.component.html',
  styleUrls: ['./form-documents.component.scss']
})
export class FormDocumentsComponent implements OnInit {
  document: Document = {
    titre: '',
    url: '',
    documentType: DocumentType.procedure,
    concerneType: ConcerneType.port,
    dateCreation: new Date(), // Initialise la date de création à la date actuelle
    dateMiseAJour: new Date() // Initialise la date de mise à jour à la date actuelle
  };

  documentTypes = Object.values(DocumentType);
  concerneTypes = Object.values(ConcerneType);

  constructor(
    private documentService: DocumentService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.documentService.createDocument(this.document)
      .subscribe(() => {
        console.log('Document added successfully');
        this.clearForm();
      }, error => {
        console.error('Error adding document:', error);
      });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const filePath = `assets/documents/${file.name}`; // Chemin d'accès relatif du fichier
    this.document.url = filePath;

    // Créez un objet URL pour lire le fichier côté client (facultatif)
    // const fileUrl = URL.createObjectURL(file);
    // console.log('File URL:', fileUrl);

    // Réinitialisez le formulaire
    const reader = new FileReader();
    reader.onload = () => {
      // Écrivez le fichier dans le dossier documents
      this.writeToFileSystem(file, filePath);
    };
    reader.readAsDataURL(file);
  }

  writeToFileSystem(file: File, filePath: string): void {
    const reader = new FileReader();
    reader.onload = () => {
      const binaryString = reader.result as string;
      const fileContent = Buffer.from(binaryString).toString('base64');
  
      // Enregistrer le fichier dans le dossier documents
      localStorage.setItem(filePath, fileContent);
    };
    reader.readAsBinaryString(file);
  }
  

  clearForm(): void {
    this.document = {
      titre: '',
      url: '',
      documentType: DocumentType.procedure,
      concerneType: ConcerneType.port,
      dateCreation: new Date(), // Réinitialise la date de création à la date actuelle
      dateMiseAJour: new Date() // Réinitialise la date de mise à jour à la date actuelle
    };
  }
}

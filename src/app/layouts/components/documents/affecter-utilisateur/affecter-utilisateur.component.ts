import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../../../../core/services/document.service';
import { Document } from '../../../../core/models/Document';
import { User } from '../../../../core/models/User';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-affecter-utilisateur',
  templateUrl: './affecter-utilisateur.component.html',
  styleUrls: ['./affecter-utilisateur.component.scss']
})
export class AffecterUtilisateurComponent implements OnInit {
  documentId: number;
  users: User[];
  document: Document;
  isUserAffectedMap: Map<number, boolean> = new Map<number, boolean>();

  regions: string[] = ['BIZERTE', 'TUNIS', 'SOUSSE', 'MONASTIR', 'SFAX', 'GABES', 'DJERBA'];
  ports: string[] = ['RADES', 'BIZERTE', 'GOULETTE', 'SOUSSE', 'SFAX', 'GABES', 'ZARZIS'];

  selectedRegion: string = '';
  selectedPort: string = '';

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.documentId = +params['documentId'];
      this.loadUsers();
      this.loadDocument();
    });
  }

  loadDocument(): void {
    this.documentService.getDocumentById(this.documentId)
      .subscribe(
        (document: Document) => {
          this.document = document;
          // Initialiser le statut de l'utilisateur affecté
          if (this.document && this.document.users) {
            this.document.users.forEach(user => {
              this.isUserAffectedMap.set(user.idUser, true);
            });
          }
        },
        error => {
          console.error('Erreur lors de la récupération du document : ', error);
        }
      );
  }

  loadUsers(): void {
    if (this.selectedRegion && !this.selectedPort) {
      // Chargez uniquement les utilisateurs avec la région sélectionnée
      this.userService.getAllUsers()
        .subscribe(users => {
          this.users = users.filter(user => user.region === this.selectedRegion);
        });
    } else if (this.selectedPort && !this.selectedRegion) {
      // Chargez uniquement les utilisateurs avec le port sélectionné
      this.userService.getAllUsers()
        .subscribe(users => {
          this.users = users.filter(user => user.port === this.selectedPort);
        });
    } else {
      // Si aucune option sélectionnée, chargez tous les utilisateurs
      this.userService.getAllUsers()
        .subscribe(users => {
          this.users = users;
        });
    }
  }

  affecterUtilisateur(userId: number): void {
    this.documentService.affecterUtilisateurAuDocument(this.documentId, userId)
      .subscribe(
        () => {
          console.log('Utilisateur affecté avec succès');
          this.isUserAffectedMap.set(userId, true);
        },
        error => {
          console.error('Erreur lors de l\'affectation de l\'utilisateur : ', error);
        }
      );
  }

  desaffecterUtilisateur(userId: number): void {
    this.documentService.desaffecterUtilisateurAuDocument(this.documentId, userId)
      .subscribe(
        () => {
          console.log('Utilisateur désaffecté avec succès');
          this.isUserAffectedMap.set(userId, false);
        },
        error => {
          console.error('Erreur lors de la désaffectation de l\'utilisateur : ', error);
        }
      );
  }

  isUserAffected(userId: number): boolean {
    return this.isUserAffectedMap.get(userId) || false;
  }

  onRegionChange(): void {
    this.selectedPort = '';
    this.loadUsers();
  }

  onPortChange(): void {
    this.selectedRegion = '';
    this.loadUsers();
  }
}

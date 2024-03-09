import { Component, OnInit } from '@angular/core';
import { User } from 'app/core/models/User'; // Assurez-vous de spécifier le bon chemin vers votre interface User
import { JwtService } from 'app/core/services/jwt.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = { // Initialisation d'une instance de User
    nom: '',
    prenom: '',
    cin: null,
    email: '',
    numTel: null,
    password: '',
    documents: [], // Si nécessaire, initialisez les autres propriétés avec des valeurs par défaut
    userAdminType: null,
    userPortType: null,
    port: null,
    userRegionMaritimeType: null,
    region: null,
    userType: null
  };

  showAdminFields: boolean = false;
  showPortFields: boolean = false;
  showRegionMaritimeFields: boolean = false;

  constructor(private jwtService: JwtService) { }

  ngOnInit(): void {
  }

  toggleFields() {
    if (this.user.userType === 'ADMIN') {
      this.showAdminFields = true;
      this.showPortFields = false;
      this.showRegionMaritimeFields = false;
    } else if (this.user.userType === 'PORT') {
      this.showAdminFields = false;
      this.showPortFields = true;
      this.showRegionMaritimeFields = false;
    } else if (this.user.userType === 'REGION_MARITIME') {
      this.showAdminFields = false;
      this.showPortFields = false;
      this.showRegionMaritimeFields = true;
    } else {
      // Si aucun type d'utilisateur sélectionné, masquez tous les champs supplémentaires
      this.showAdminFields = false;
      this.showPortFields = false;
      this.showRegionMaritimeFields = false;
    }
  }


  registerUser() {
    this.jwtService.registerUser(this.user, this.user.userType)
      .subscribe(response => {
        console.log(response);
        console.log(this.user) // Gérer la réponse du serveur ici
      }, error => {
        console.error(error); 
        console.log(this.user)// Gérer les erreurs ici
      });
  }


}

import { Component, OnInit } from '@angular/core';
import { JwtService } from 'app/core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private jwtService: JwtService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // Vérifiez si les champs email et password sont renseignés
    if (!this.email || !this.password) {
      console.log('Veuillez renseigner l\'email et le mot de passe.');
      return;
    }

    // Appelez le service d'authentification pour gérer la connexion
    this.jwtService.loginUser({ email: this.email, password: this.password })
      .subscribe(response => {
        console.log('Connexion réussie.', response);
        const jwtToken =response.jwt;
        localStorage.setItem('jwt',jwtToken);
        this.router.navigate(['/dashboard']); 
      }, error => {
        console.error('Erreur lors de la connexion.', error);
      });
  }
}

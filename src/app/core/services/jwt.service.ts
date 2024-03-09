import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Document } from '../models/Document';
import { environment } from 'environments/environment';
import { User } from '../models/User';
import { Router } from '@angular/router';
const baseUrl = environment.authUrl;
@Injectable({
  providedIn: 'root'
})
export class JwtService  {

  
  
  constructor(private http: HttpClient,private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  registerUser(signRequest: User, userType: string): Observable<User> {
    
    return this.http.post<User>(baseUrl + `/signup/${userType}`, signRequest)
    .pipe(
        catchError(this.handleError)
      );
  }
  loginUser(signRequest: any): Observable<any> {
    
    return this.http.post<any>(baseUrl + `/login`, signRequest)
    .pipe(
        catchError(this.handleError)
      );
  }

  logout(): void {
    // Effacez les informations d'authentification du stockage local ou de tout autre emplacement
    localStorage.removeItem('jwt');
    // Redirigez l'utilisateur vers la page de connexion ou toute autre page appropriée
    this.router.navigateByUrl('/#/authentifications/login');
  }



  private handleError(error: any) {
    console.error('Error occurred:', error);
    return throwError(error);
  }
}
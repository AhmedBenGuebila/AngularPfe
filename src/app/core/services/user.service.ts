import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User, UserAdmin, UserPort, UserRegionMaritime } from '../models/User';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrlUser = environment.defaultUrl + '/users';
  private baseUrlUserPort = environment.defaultUrl + '/user-ports';
  private baseUrlUserRegion = environment.defaultUrl + '/user-region-maritime';
  private baseUrlUserAdmin = environment.defaultUrl + '/user-admins';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Créer un utilisateur
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrlUser, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
 

  // Mettre à jour un utilisateur
  updateUser(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrlUser}/${userId}`, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Supprimer un utilisateur
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlUser}/${userId}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer un utilisateur par ID
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrlUser}/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer tous les utilisateurs
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrlUser)
      .pipe(
        catchError(this.handleError)
      );
  }

// Créer un utilisateur
createUserPort(user: UserPort): Observable<User> {
    return this.http.post<UserPort>(this.baseUrlUserPort, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
 

  // Mettre à jour un utilisateur
  updateUserPort(userId: number, user: UserPort): Observable<User> {
    return this.http.put<User>(`${this.baseUrlUserPort}/${userId}`, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Supprimer un utilisateur
  deleteUserPort(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlUserPort}/${userId}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer un utilisateur par ID
  getUserPortById(userId: number): Observable<User> {
    return this.http.get<UserPort>(`${this.baseUrlUserPort}/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer tous les utilisateurs
  getAllPortUsers(): Observable<UserPort[]> {
    return this.http.get<UserPort[]>(this.baseUrlUserPort)
      .pipe(
        catchError(this.handleError)
      );
  }
  // Créer un utilisateur
  createUserRegion(user: UserRegionMaritime): Observable<UserRegionMaritime> {
    return this.http.post<UserRegionMaritime>(this.baseUrlUserRegion, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
 

  // Mettre à jour un utilisateur
  updateUserRegion(userId: number, user: UserRegionMaritime): Observable<User> {
    return this.http.put<UserRegionMaritime>(`${this.baseUrlUserRegion}/${userId}`, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Supprimer un utilisateur
  deleteUserRegion(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlUserRegion}/${userId}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer un utilisateur par ID
  getUserRegionById(userId: number): Observable<User> {
    return this.http.get<UserRegionMaritime>(`${this.baseUrlUserRegion}/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer tous les utilisateurs
  getAllRegionUsers(): Observable<UserRegionMaritime[]> {
    return this.http.get<UserRegionMaritime[]>(this.baseUrlUserRegion)
      .pipe(
        catchError(this.handleError)
      );
  }

 // Créer un utilisateur
 createUserAdmin(user: UserAdmin): Observable<User> {
    return this.http.post<User>(this.baseUrlUserAdmin, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
 

  // Mettre à jour un utilisateur
  updateUserAdmin(userId: number, user: User): Observable<User> {
    return this.http.put<UserAdmin>(`${this.baseUrlUserAdmin}/${userId}`, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Supprimer un utilisateur
  deleteUserAdmin(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlUserAdmin}/${userId}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer un utilisateur par ID
  getUserAdminById(userId: number): Observable<User> {
    return this.http.get<UserAdmin>(`${this.baseUrlUserAdmin}/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer tous les utilisateurs
  getAllAdminUsers(): Observable<UserAdmin[]> {
    return this.http.get<UserAdmin[]>(this.baseUrlUserAdmin)
      .pipe(
        catchError(this.handleError)
      );
  }

  

  // Gestion des erreurs
  private handleError(error: any) {
    console.error('Error occurred:', error);
    return throwError(error);
  }
}

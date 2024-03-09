import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Document } from '../models/Document';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = environment.defaultUrl + '/documents';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  createDocument(document: Document): Observable<Document> {
    return this.http.post<Document>(this.baseUrl, JSON.stringify(document), { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateDocument(documentId: number, document: Document): Observable<Document> {
    return this.http.put<Document>(`${this.baseUrl}/${documentId}`, JSON.stringify(document), { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteDocument(documentId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${documentId}`, { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  getDocumentById(documentId: number): Observable<Document> {
    return this.http.get<Document>(`${this.baseUrl}/${documentId}`, { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl, { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllDocumentsByUserId(userId: number): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}/${userId}/documents`, { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  affecterUtilisateurAuDocument(documentId: number, userId: number): Observable<Document> {
    return this.http.post<Document>(`${this.baseUrl}/affecter/${documentId}/${userId}`, null, { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  desaffecterUtilisateurAuDocument(documentId: number, userId: number): Observable<Document> {
    return this.http.post<Document>(`${this.baseUrl}/desaffecter/${documentId}/${userId}`, null, { headers: this.createHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Error occurred:', error);
    return throwError(error);
  }

  private createHeaders(): HttpHeaders {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + jwtToken);
    } else {
      console.log('No token found');
      return new HttpHeaders();
    }
  }
}

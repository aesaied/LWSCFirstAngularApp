import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AlbumModel } from '../models/album-model';
import { Observable, catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumURL = 'albums'
  constructor(private http: HttpClient, @Inject('API_URL') private apiURL: string) {


  }


  getAllAlbums(): Observable<AlbumModel[]> {


    return this.http.get<AlbumModel[]>(`${this.apiURL}${this.albumURL}`);



  }

  getAlbumById(id: number): Observable<AlbumModel | null> {

    return this.http.get<AlbumModel>(`${this.apiURL}${this.albumURL}/${id}`).pipe(
      retry(3),

      catchError(this.handleError)


    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend  returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

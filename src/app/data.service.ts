import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface DogList {
  message: Object;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<DogList>(`https://dog.ceo/api/breeds/list/all`).pipe(
      catchError((error) => {
        alert(error.message);
        return throwError(' Blad polaczenia z baza');
      })
    );
  }
  getImage(params: string) {
    return this.http
      .get<DogList>('https://dog.ceo/api/breed/' + params + '/images')
      .pipe(
        catchError((error) => {
          alert(error.message);
          return throwError(' Blad polaczenia z baza');
        })
      );
  }
}

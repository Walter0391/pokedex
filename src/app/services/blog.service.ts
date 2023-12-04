import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articolo } from 'models/articolo';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getArticoli(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(
      `${environment.JSON_SERVER_BASE_URL}/articoli`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServices } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://7csx60ms-3050.brs.devtunnels.ms';

  constructor(private _httpClient: HttpClient) { }

  public getServices(): Observable<IServices[]> {
    return this._httpClient.get<IServices[]>(`${this.baseUrl}/prestador`);
  }

  public getService(id: number): Observable<IServices> {
    return this._httpClient.get<IServices>(`${this.baseUrl}/prestador/${id}`);
  }
}

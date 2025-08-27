import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const HISTORY_KEY = 'gifs-history';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private _apiKey: string = '';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(
    private http: HttpClient
  ) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem(HISTORY_KEY)) return;
    this._tagsHistory = JSON.parse(localStorage.getItem(HISTORY_KEY)!);
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  private saveLocalStorage(): void {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(this._tagsHistory));
  }

  private organizeHistory(tag: string): void {
    const tagLowered = tag.toLowerCase();

    if (this._tagsHistory.includes(tagLowered)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tagLowered);
    }

    this._tagsHistory.unshift(tagLowered);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${this._serviceUrl}/search`, { params })
      .subscribe({
        next: (resp) => {
          this.gifList = resp.data;
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { IServices } from '../../models/service.model';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  public servicesList: IServices[] = [];
  public loading: boolean = true;

  constructor(
    private _router: Router,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._apiService.getServices().subscribe({
      next: (services: IServices[]) => {
        this.servicesList = services;
        this.loading = false;
      },
      error: (error: any) => {
        console.log(error.error.msg);
        this.loading = false;
      }
    });
  }

  navigate(id: number) {
    this._router.navigate(['/services', id]);
  }
}

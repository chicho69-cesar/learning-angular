import { Component, OnInit } from '@angular/core';
import { IServices } from '../../models/service.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  public service?: IServices;
  public loading: boolean = true;
  public error: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(({
      next: (params: Params) => {
        this._apiService.getService(Number(params['id'])).subscribe({
          next: (service: IServices) => {
            this.service = service;
            this.loading = false;
          },
          error: (error: any) => {
            this.error = error.error.msg;
            console.log(error.error.msg);
            this.loading = false;
          }
        })
      },
      error: (error: any) => {
        console.log(error.error.msg);
      }
    }));
  }
}

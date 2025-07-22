import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  public loading: boolean = true;
  public id = signal<number | undefined>(undefined);

  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id.set(params['id']);
    });
  }
}

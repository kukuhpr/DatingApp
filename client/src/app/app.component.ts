import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiClientService } from './core/services/api-client.service';
import { SwalfireService } from './core/services/swalfire.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;

  constructor(
    private _client: ApiClientService,
    private _notification: SwalfireService
  ) {}

  async ngOnInit() {
    // throw new Error('Method not implemented.');
    // this.http.get('https://localhost:5206/api/users').subscribe({
    //   next: (response) => (this.users = response),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete'),
    // });
    this.get_user();
  }

  async get_user() {
    await this._client.get_user().then((e) => {
      this.users = e;
      console.log(this.users);
    });
  }
}

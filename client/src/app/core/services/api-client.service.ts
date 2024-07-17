import { Injectable } from '@angular/core';
import { ApiDataService } from './api-data.service';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private _service: ApiDataService) {}

  async get_user() {
    return await this._service.getAPI('api/users', '');
  }
}

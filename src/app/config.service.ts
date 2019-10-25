import { Injectable } from '@angular/core';
import { configuration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;

  constructor() { }

  getConfig() {
    return this.config;
  }
  getPostByID(id: number) {
    return this.config.team.post[id - 1];
  }
  getServicePostByID(id: number) {
    return this.config.services.servicepost[id - 1];
  }
}

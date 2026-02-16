import { Injectable } from "@angular/core";

@Injectable()
export class BackendDiscoveryService {
  public backendUrl: string;

  constructor() {
    const origin = new URL(import.meta.url);
    const path = origin.pathname.substring(0, origin.pathname.lastIndexOf('/'));

    this.backendUrl = `${origin.protocol}//${origin.host}${path}`;
  }
}
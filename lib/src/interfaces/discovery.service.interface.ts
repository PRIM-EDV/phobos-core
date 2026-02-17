import { InjectionToken } from "@angular/core";

export interface IDiscoveryService {
   hasRole(role: string): boolean
}

export const DISCOVERY_SERVICE_TOKEN = new InjectionToken<IDiscoveryService>('DiscoveryServiceToken');

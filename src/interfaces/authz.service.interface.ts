import { InjectionToken, WritableSignal } from "@angular/core";

export interface IAuthzService {
   hasRole(role: string): boolean
}

export const AUTHZ_SERVICE_TOKEN = new InjectionToken<IAuthzService>('AuthzServiceToken');

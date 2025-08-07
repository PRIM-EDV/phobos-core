import { InjectionToken, Signal } from "@angular/core";

export interface ITokenService {
    accessToken: () => Signal<string | null>;
}

export const TOKEN_SERVICE_TOKEN = new InjectionToken<ITokenService>('TokenServiceToken');

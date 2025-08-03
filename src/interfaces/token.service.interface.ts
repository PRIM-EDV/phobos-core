import { InjectionToken } from "@angular/core";

export interface ITokenService {
    accessToken: () => Promise<string | null>;
}

export const TOKEN_SERVICE_TOKEN = new InjectionToken<ITokenService>('TokenServiceToken');

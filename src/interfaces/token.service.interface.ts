import { InjectionToken, WritableSignal } from "@angular/core";

export interface ITokenService {
    accessToken: () => WritableSignal<string | null>;
}

export const TOKEN_SERVICE_TOKEN = new InjectionToken<ITokenService>('TokenServiceToken');

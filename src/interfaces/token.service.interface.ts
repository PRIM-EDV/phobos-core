import { Signal } from "@angular/core";

export interface ITokenService {
    accessToken: Signal<string | null>;
}
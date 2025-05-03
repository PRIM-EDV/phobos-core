import { Signal } from "@angular/core";

export interface ITokenService {
    accessToken: Signal<Promise<string | null>>;
}
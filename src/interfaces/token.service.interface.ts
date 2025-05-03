export interface ITokenService {
    accessToken:  () => Promise<string | null>;
}
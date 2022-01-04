import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Remult } from 'remult';
import { AuthServerService } from './auth.server.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    async signIn(username: string, password: string) {
        this.setAuthToken(await AuthServerService.signIn(username, password));
    }

    setAuthToken(token: string) {
        this.remult.setUser(new JwtHelperService().decodeToken(token));
        sessionStorage.setItem(AUTH_TOKEN_KEY, token);
    }

    signOut() {
        this.remult.setUser(undefined!);
        sessionStorage.removeItem(AUTH_TOKEN_KEY);
    }

    static fromStorage(): string {
        return sessionStorage.getItem(AUTH_TOKEN_KEY)!;
    }

    constructor(private remult: Remult) {
        let token = AuthService.fromStorage();
        if (token) {
            this.setAuthToken(token);
        }
    }
}
const AUTH_TOKEN_KEY = "authToken";
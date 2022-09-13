import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { remult } from 'remult';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() {
        const token = AuthService.fromStorage();
        if (token) {
            this.setAuthToken(token);
        }
    }

    setAuthToken(token: string | null, rememberOnThisDevice = false) {
        if (token) {
            remult.user = new JwtHelperService().decodeToken(token);
            sessionStorage.setItem(AUTH_TOKEN_KEY, token);
            if (rememberOnThisDevice) {
                localStorage.setItem(AUTH_TOKEN_KEY, token);
            }

        }
        else {
            remult.user = undefined;
            sessionStorage.removeItem(AUTH_TOKEN_KEY);
            localStorage.removeItem(AUTH_TOKEN_KEY);
        }
    }

    static fromStorage(): string {
        return sessionStorage.getItem(AUTH_TOKEN_KEY) || localStorage.getItem(AUTH_TOKEN_KEY)!;
    }
}

const AUTH_TOKEN_KEY = "authToken";

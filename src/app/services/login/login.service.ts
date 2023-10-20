import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    private apiUrl = 'http://localhost:8080/api/v1/auth/login';

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        const credentials = { username, password };
        return this.http.post(this.apiUrl, credentials);
      }
}
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Config } from '../config';

@Injectable()
export class UserService {
    constructor(private http: Http) {

    }

    public register(user: User): any {
        return this.http.post(
            Config.apiUrl + "user/" + Config.appKey,
            JSON.stringify({
                username: user.email,
                email: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        ).pipe(
            catchError(this.handleErrors)
        );
    }

    public getCommonHeaders(): any {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", Config.authHeader);
        return headers;
    }

    public handleErrors(error: Response): any {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
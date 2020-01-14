import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    public getReminders(): Observable<any>{
        return this.http.get('https://localhost:44305/api/Reminders');
    }
}
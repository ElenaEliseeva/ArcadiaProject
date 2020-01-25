import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';

import { Reminder } from '../models/reminder';

@Injectable()
export class HttpService {

    private url = "http://localhost:5000/api/Reminders";

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    getReminders(): Observable<any> {
        return this.http.get(this.url + '/' + this.cookieService.get("RemindrsApp"));
    }
    
    createReminder(reminder: Reminder) : Observable<any> {
        return this.http.post(this.url, reminder);
    }

    deleteReminder(idReminder: number): Observable<any> {
        return this.http.delete(this.url + '/' + idReminder);
    }
}
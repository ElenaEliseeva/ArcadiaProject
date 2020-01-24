﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reminder } from '../models/reminder';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

    private url = "http://localhost:5000/api/Reminders";

    constructor(private http: HttpClient) {
    }

    getReminders(): Observable<any> {
        return this.http.get(this.url);
    }
    
    createReminder(reminder: Reminder) : Observable<any> {
        return this.http.post(this.url, reminder);
    }

    deleteReminder(idReminder: number): Observable<any> {
        return this.http.delete(this.url + '/' + idReminder);
    }
}
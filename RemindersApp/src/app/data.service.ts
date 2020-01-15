import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reminder } from './reminder/reminder';

@Injectable()
export class DataService {

    private url = "/api/Reminders";

    constructor(private http: HttpClient) {
    }

    getReminders() {
        return this.http.get(this.url);
    }

    createReminder(reminder: Reminder) {
        return this.http.post(this.url, reminder);
    }

    updateReminder(reminder: Reminder) {

        return this.http.put(this.url + '/' + reminder.idReminder, reminder);
    }

    deleteReminder(idReminder: number) {
        return this.http.delete(this.url + '/' + idReminder);
    }
}
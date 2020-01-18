import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from "ngx-cookie-service";
import { DataService } from './data.service';
import { Reminder } from './models/reminder';


@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    providers: [DataService]
})

export class AppComponent implements OnInit {

    reminder: Reminder;
    reminders: Reminder[];
    date = { year: 2020, month: 1, day: 30 };
    time = { hour: 13, minute: 30 };
    body: string;
    cookie: string;
    
    constructor(private dataService: DataService, private cookieService: CookieService) {
    }
  
    ngOnInit() {
        this.loadReminders();
    }

    loadReminders() {
        this.dataService.getReminders()
            .subscribe((data: Reminder[]) => this.reminders = data);
    }

    delete(r: Reminder) {
        this.dataService.deleteReminder(r.idReminder)
            .subscribe(data => this.loadReminders());
    }

    add() {
        this.reminder = this.newReminder();
        this.dataService.createReminder(this.reminder)
            .subscribe((data: Reminder) => this.reminders.push(data));
    }

    newReminder(): Reminder {
        var timeToWork = this.date['day'] + "/" + this.date['month'] + "/" + this.date['year'] + " "
            + this.time['hour'] + ":" + this.time['minute'];
        return new Reminder(this.body, timeToWork);
    } 
}
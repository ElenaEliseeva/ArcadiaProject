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
        //this.identifyUser();
        this.loadReminders();
    }

   /* identifyUser() {
       if (this.cookieService.check("RemindersApp")) {
            this.cookie = this.cookieService.get("RemindersApp");
       }
       else
       { 
           this.cookie = this.newCookieValue();
           this.cookieService.set("RemindersApp", this.reminder.cookie);
       }
    }*/

    loadReminders() {
        this.dataService.getReminders()
            .subscribe((data: Reminder[]) => this.reminders = data);
    }

    save() {
        if (this.reminder.idReminder == null) {
            this.dataService.createReminder(this.reminder)
                .subscribe((data: Reminder) => this.reminders.push(data));
        } else {
            this.dataService.updateReminder(this.reminder)
                .subscribe(data => this.loadReminders());
        }
        this.cancel();
    }

    editReminder(r: Reminder) {
        this.reminder = r;
    }

    cancel() {
        this.reminder = this.newReminder();
    }

    delete(r: Reminder) {
        this.dataService.deleteReminder(r.idReminder)
            .subscribe(data => this.loadReminders());
    }

    add() {
        this.cancel();
        this.save();
    }

    newReminder(): Reminder {
        var timeToWork = this.date['year'] + "/" + this.date['month'] + "/" + this.date['day'] + " "
            + this.time['hour'] + ":" + this.time['hour'];
        return new Reminder(this.body, timeToWork);
    }
    
}
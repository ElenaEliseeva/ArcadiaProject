﻿import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { strict } from 'assert';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from "ngx-cookie-service";
import { PushNotificationsService } from "ng-push";

import { DataService } from './data.service';
import { Reminder } from './models/reminder';



@Component({
    selector: 'reminders-app',
    templateUrl: './app.component.html',
    providers: [DataService]
})

export class AppComponent implements OnInit {

    reminder: Reminder;
    reminders: Reminder[];
    date = { year: 2020, month: 1, day: 30 };
    time = { hour: 13, minute: 30 };
    body: string;
    
    constructor(private dataService: DataService, private cookieService: CookieService,
        private pushNotificationsService: PushNotificationsService, cd: ChangeDetectorRef) {
        setInterval(() => { this.checkNotification(); }, 60000);
    }
  
    ngOnInit() {
        this.loadReminders();
    }

    requestPermission() {
        this.pushNotificationsService.requestPermission();      
    }

    pushNotification() {
        
        this.pushNotificationsService.create(
            'Example One',
            { body: 'Just an example' }
        )
            .subscribe(
                (res: any) => console.log(res),
                (err: any) => console.log(err)
        )
    }

    checkNotification() {
        var timeNow: Date = new Date();
        var timeNowStr: string = timeNow.toLocaleString().replace(/([^T]+)T([^.]+).*/g, '$1 $2').substring(0, 17);
        this.reminders.forEach(reminder => {
            if (reminder.timeToWork == timeNowStr) {
                this.pushNotification();
            }
        })

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
        if (this.body.trim().length === 0) {
            return;
        }
        this.reminder = this.newReminder();
        this.dataService.createReminder(this.reminder)
            .subscribe((data: Reminder) => this.reminders.push(data));
    }

    newReminder(): Reminder {
        var timeToWork = this.zero(this.date['day']) + this.date['day'] + "."
            + this.zero(this.date['month']) + this.date['month'] + "."
            + this.date['year'] + ", "
            + this.zero(this.date['hour']) + this.time['hour'] + ":"
            + this.zero(this.date['minute']) + this.time['minute'];

        return new Reminder(this.body, timeToWork);
    } 

    zero(num: number):string {
        if (num <= 9) {
            return "0";
        } else {
            return ""
        };
    }
}

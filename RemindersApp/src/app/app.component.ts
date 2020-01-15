import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Reminder } from './reminder/reminder';


@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    providers: [DataService]
})

export class AppComponent implements OnInit {

    reminder: Reminder;
    reminders: Reminder[];
    appForm: FormGroup;
    

    constructor(private dataService: DataService) {
        this.appForm = new FormGroup({
            "remindersBody": new FormControl("Текст напоминания", Validators.required),
            "remindersDate": new FormControl("", Validators.required),
        });
    }
  
    ngOnInit() {

        this.loadReminders();
    }

    loadReminders() {
        this.dataService.getReminders()
            .subscribe((data: Reminder[]) => this.reminders = data);
    }

    addItem(body: string, date: JSON, time: JSON): void {

        if (body == null || body.trim() == "")
            return;

        /*var timeToWork = date['year'] + "/" + date['month'] + "/" + date['day'] + " " + time['hour'] + ":" + time['hour'];
        this.reminders.push(new Reminder(4, body, timeToWork, 1, 1));*/
    }

    date = { year: 2020, month: 1, day: 30};
    time = { hour: 13, minute: 30 };
}
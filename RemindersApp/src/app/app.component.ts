import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from './http.service';
import { Reminder } from './reminder/reminder';


@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    providers: [HttpService]
})

export class AppComponent implements OnInit {
    appForm: FormGroup;
    reminders: Reminder[] = [];

    constructor(private httpService: HttpService) {
        this.appForm = new FormGroup({
            "remindersBody": new FormControl("Текст напоминания", Validators.required),
            "remindersDate": new FormControl("", Validators.required),
        });
    }
  
    ngOnInit() {
        this.httpService.getReminders().subscribe(data => this.reminders = data);
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
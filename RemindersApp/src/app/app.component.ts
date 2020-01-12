import { Component } from '@angular/core';
import { strict } from 'assert';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class Reminder {
    id: number;
    body: string;
    timeToWork: string; 
    idPriority: number;
    idCookie: number;


    constructor(id: number, body: string, timeToWork: string, idPriority: number, idCookie: number) {
        this.id =id;
        this.body = body;
        this.timeToWork = timeToWork; 
        this.idPriority = idPriority;
        this.idCookie = idCookie;
    }
}

@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    appForm: FormGroup;
    constructor() {
        this.appForm = new FormGroup({

            "remindersBody": new FormControl("Текст напоминания", Validators.required),
            "remindersDate": new FormControl("", [Validators.required]),
        });
    }

    reminders: Reminder[] =
        [
            { id: 1, body: "Купить хлеб", timeToWork: "2020", idPriority: 1, idCookie: 1 },
            { id: 2, body: "Купить колбасу", timeToWork: "2020", idPriority: 1, idCookie: 1 },
            { id: 3, body: "Купить слона", timeToWork: "2020", idPriority: 1, idCookie: 1 }
        ];

    addItem(body: string, date: JSON, time: JSON): void {

        if (body == null || body.trim() == "")
            return;

        var timeToWork = date['year'] + "/" + date['month'] + "/" + date['day'] + " " + time['hour'] + ":" + time['hour'];
        this.reminders.push(new Reminder(4, body, timeToWork, 1, 1));
    }

    date = { year: 2020, month: 1, day: 30};
    time = { hour: 13, minute: 30 };
}
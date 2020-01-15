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
    date = { year: 2020, month: 1, day: 30 };
    time = { hour: 13, minute: 30 };
    body = "";
    

    constructor(private dataService: DataService) {
    }
  
    ngOnInit() {
        this.loadReminders();
    }

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
        return new Reminder(null, this.body, timeToWork, 1, 1);
    }

    
}
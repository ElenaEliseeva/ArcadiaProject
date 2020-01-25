import { Component, EventEmitter, Output} from '@angular/core';
import { CookieService } from "ngx-cookie-service";

import { NotificationService } from '../services/notification.service';
import { DateTimeService } from '../services/datetime.service';
import { Reminder } from '../models/reminder';


@Component({
    selector: 'form-reminders',
    templateUrl: './form.component.html',
})
export class FormComponent {

    @Output() add = new EventEmitter<Reminder>();

    reminder: Reminder;
    date = { year: 2020, month: 1, day: 30 };
    time = { hour: 13, minute: 0 };
    body: string;

    constructor(private cookieService: CookieService,
        private dateTimeService: DateTimeService,
        private notificationService: NotificationService) { }

    addReminder() {
        if (!this.bodyValid() || !this.dateValid()) {
            return;
        }
        this.reminder = this.newReminder();
        this.add.emit(this.reminder);
    }

    bodyValid(): boolean {
        if (this.body=="") {
            return false;
        } else { return true; }
    }

    dateValid(): boolean {
        if (this.dateTimeService.getDateTimeFromJSON(this.date, this.time) < this.dateTimeService.getDateTimeNow()) {
            return false;
        } else { return true; }
    }

    newReminder(): Reminder {
        var timeToWork = this.dateTimeService.getDateTimeFromJSON(this.date, this.time);
        return new Reminder(this.body, timeToWork, this.cookieService.get("RemindrsApp"));
    }

    
}
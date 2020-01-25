import { Component, Input, EventEmitter, Output} from '@angular/core';

import { Reminder } from '../models/reminder';
import { DateTimeService } from '../services/datetime.service';


@Component({
    selector: 'list-reminders',
    templateUrl: './list.component.html',
})

export class ListComponent{

    @Input() reminders: Reminder[];
    @Output() delete = new EventEmitter<Reminder>();

    constructor(private dateTimeService: DateTimeService) {}

    deleteReminder(reminder: Reminder) {
        this.delete.emit(reminder);
    }

    done(reminder: Reminder): boolean {
        var timeNow = this.dateTimeService.getDateTimeNow();
        if (reminder.timeToWork > timeNow) {
            return false;
        } else {
            return true;
        }
    }
}
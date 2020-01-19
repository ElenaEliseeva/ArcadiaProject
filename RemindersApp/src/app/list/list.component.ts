import { Component, Input, EventEmitter, Output} from '@angular/core';

import { Reminder } from '../models/reminder';

@Component({
    selector: 'list-reminders',
    templateUrl: './list.component.html',
})
export class ListComponent{

    @Input() reminders: Reminder[];
    @Output() delete = new EventEmitter<Reminder>();
    deleteReminder(reminder: Reminder) {
        this.delete.emit(reminder);
    }

    done(reminder: Reminder): boolean {
        var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        var timeNow = new Date().toLocaleString('ko-KR', options);
        if (reminder.timeToWork > timeNow) {

            return false;
        } else {

            return true;
        }
    }
}
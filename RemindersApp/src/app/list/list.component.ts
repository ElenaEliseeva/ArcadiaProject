import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Reminder } from '../models/reminder';

@Component({
    selector: 'list-reminders',
    templateUrl: './list.component.html',
})
export class ListComponent {
    @Input() reminders: Reminder[];
    @Output() delete = new EventEmitter<Reminder>();
    deleteReminder(reminder: Reminder) {
        this.delete.emit(reminder);
    }
}
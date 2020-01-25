import { Injectable } from '@angular/core';
import { PushNotificationsService } from "ng-push";

import { Reminder } from '../models/reminder';

@Injectable()
export class NotificationService {

    constructor( private pushNotificationsService: PushNotificationsService) { 
    }

    requestPermission() {
        this.pushNotificationsService.requestPermission();
    }

    checkNotification(reminders: Reminder[]) {
        var date = new Date();
        if (date.getSeconds() == 0) {
            var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
            var timeNow = new Date().toLocaleString('ko-KR', options);
            reminders.forEach(reminder => {
                if (reminder.timeToWork == timeNow) {
                    this.pushNotification(reminder.body);
                }
            })
        }
    }

    pushNotification(body: string) {
        this.pushNotificationsService.create(
            body,
            { body: 'Reminders App' }
        ).subscribe()
    }

    premissionGranted(): boolean {
        if (this.pushNotificationsService.permission == 'granted') {
            return true;
        } else {
            return false;
        }   
    }
}
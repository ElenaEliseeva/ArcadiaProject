import { Component, OnInit} from '@angular/core';

import { NotificationService } from './services/notification.service';
import { HttpService } from './services/http.service';
import { AppCookieService } from './services/appcookie.service';
import { Reminder } from './models/reminder';

@Component({
    selector: 'reminders-app',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

    reminders: Reminder[];

    constructor(private notificationsService: NotificationService,
        private httpService: HttpService, private appCookieService: AppCookieService) {
    }
  
    ngOnInit() {
        this.appCookieService.checkOrSetCookie();
        this.loadReminders();
        setInterval(() => { this.notificationsService.checkNotification(this.reminders); }, 1000);
    }

    loadReminders() {
        this.httpService.getReminders()
            .subscribe((data: Reminder[]) => this.reminders = data);
    }

    delete(r: Reminder) {
        this.httpService.deleteReminder(r.idReminder)
            .subscribe(data => this.loadReminders());
    }

    add(r: Reminder) {
        this.httpService.createReminder(r)
            .subscribe((data: Reminder) => this.reminders.push(data));
    }

    
}

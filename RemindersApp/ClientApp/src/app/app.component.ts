import { Component, OnInit} from '@angular/core';
import { PushNotificationsService } from "ng-push";
import { CookieService } from "ngx-cookie-service";

import { Reminder } from './models/reminder';
import { NotificationService } from './services/notification.service';
import { HttpService } from './services/http.service';


@Component({
    selector: 'reminders-app',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

    reminders: Reminder[];

    constructor(private cookieService: CookieService,
        private notificationsService: NotificationService,
        private httpService: HttpService) {
    }
  
    ngOnInit() {
        if (!this.cookieService.check("RemindrsApp")) {
            this.cookieService.set("RemindrsApp", this.newCookie(8));
        } 
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

    newCookie(length: number): string {
        var cookie = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            cookie += possible.charAt(Math.floor(Math.random() * possible.length));

        return cookie;
    }
}

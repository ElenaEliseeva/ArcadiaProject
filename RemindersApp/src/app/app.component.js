var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { PushNotificationsService } from "ng-push";
import { DataService } from './data.service';
import { Reminder } from './models/reminder';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService, cookieService, pushNotificationsService, cd) {
        var _this = this;
        this.dataService = dataService;
        this.cookieService = cookieService;
        this.pushNotificationsService = pushNotificationsService;
        this.date = { year: 2020, month: 1, day: 30 };
        this.time = { hour: 13, minute: 30 };
        setInterval(function () { _this.checkNotification(); }, 60000);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadReminders();
    };
    AppComponent.prototype.requestPermission = function () {
        this.pushNotificationsService.requestPermission();
    };
    AppComponent.prototype.checkNotification = function () {
        var _this = this;
        var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        var timeNow = new Date().toLocaleString('ko-KR', options);
        console.log(timeNow);
        this.reminders.forEach(function (reminder) {
            if (reminder.timeToWork == timeNow) {
                _this.pushNotification(reminder.body);
            }
        });
    };
    AppComponent.prototype.pushNotification = function (body) {
        this.pushNotificationsService.create(body, { body: 'Reminders App' })
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    AppComponent.prototype.loadReminders = function () {
        var _this = this;
        this.dataService.getReminders()
            .subscribe(function (data) { return _this.reminders = data; });
    };
    AppComponent.prototype.delete = function (r) {
        var _this = this;
        this.dataService.deleteReminder(r.idReminder)
            .subscribe(function (data) { return _this.loadReminders(); });
    };
    AppComponent.prototype.add = function () {
        var _this = this;
        if (this.body.trim().length === 0) {
            return;
        }
        this.reminder = this.newReminder();
        this.dataService.createReminder(this.reminder)
            .subscribe(function (data) { return _this.reminders.push(data); });
    };
    AppComponent.prototype.newReminder = function () {
        var timeToWork = this.date['year'] + ". "
            + this.zero(this.date['month']) + this.date['month'] + ". "
            + this.zero(this.date['day']) + this.date['day'] + ". "
            + this.zero(this.date['hour']) + this.time['hour'] + ":"
            + this.zero(this.date['minute']) + this.time['minute'];
        return new Reminder(this.body, timeToWork);
    };
    AppComponent.prototype.zero = function (num) {
        if (num <= 9) {
            return "0";
        }
        else {
            return "";
        }
        ;
    };
    AppComponent = __decorate([
        Component({
            selector: 'reminders-app',
            templateUrl: './app.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, CookieService,
            PushNotificationsService, ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
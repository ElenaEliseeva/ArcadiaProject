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
        setInterval(function () { _this.checkNotification(); }, 1000);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadReminders();
    };
    AppComponent.prototype.requestPermission = function () {
        this.pushNotificationsService.requestPermission();
    };
    AppComponent.prototype.pushNotification = function () {
        this.pushNotificationsService.create('Example One', { body: 'Just an example' })
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    AppComponent.prototype.checkNotification = function () {
        var timeNow = new Date();
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
        this.reminder = this.newReminder();
        this.dataService.createReminder(this.reminder)
            .subscribe(function (data) { return _this.reminders.push(data); });
    };
    AppComponent.prototype.newReminder = function () {
        var timeToWork = this.date['day'] + "/" + this.date['month'] + "/" + this.date['year'] + ", "
            + this.time['hour'] + ":" + this.time['minute'];
        return new Reminder(this.body, timeToWork);
    };
    AppComponent = __decorate([
        Component({
            selector: 'purchase-app',
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
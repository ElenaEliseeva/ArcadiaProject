var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { HttpService } from '../services/http.service';
import { NotificationService } from '../services/notification.service';
import { Reminder } from '../models/reminder';
var FormComponent = /** @class */ (function () {
    function FormComponent(httpService, cookieService, notificationsService) {
        this.httpService = httpService;
        this.cookieService = cookieService;
        this.notificationsService = notificationsService;
        this.date = { year: 2020, month: 1, day: 30 };
        this.time = { hour: 13, minute: 0 };
    }
    FormComponent.prototype.add = function () {
        var _this = this;
        if (this.body.trim().length === 0) {
            return;
        }
        this.reminder = this.newReminder();
        this.httpService.createReminder(this.reminder)
            .subscribe(function (data) { return _this.reminders.push(data); });
    };
    FormComponent.prototype.newReminder = function () {
        var timeToWork = this.date['year'] + ". "
            + this.zero(this.date['month']) + this.date['month'] + ". "
            + this.zero(this.date['day']) + this.date['day'] + ". "
            + this.zero(this.time['hour']) + this.time['hour'] + ":"
            + this.zero(this.time['minute']) + this.time['minute'];
        return new Reminder(this.body, timeToWork, this.cookieService.get("RemindrsApp"));
    };
    FormComponent.prototype.zero = function (num) {
        if (num <= 9) {
            return "0";
        }
        else {
            return "";
        }
        ;
    };
    __decorate([
        Input(),
        __metadata("design:type", Reminder)
    ], FormComponent.prototype, "reminder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], FormComponent.prototype, "reminders", void 0);
    FormComponent = __decorate([
        Component({
            selector: 'form-reminders',
            templateUrl: './form.component.html',
        }),
        __metadata("design:paramtypes", [HttpService, CookieService,
            NotificationService])
    ], FormComponent);
    return FormComponent;
}());
export { FormComponent };
//# sourceMappingURL=form.component.js.map
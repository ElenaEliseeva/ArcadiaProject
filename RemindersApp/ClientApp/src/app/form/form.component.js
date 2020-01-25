var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { NotificationService } from '../services/notification.service';
import { DateTimeService } from '../services/datetime.service';
import { Reminder } from '../models/reminder';
var FormComponent = /** @class */ (function () {
    function FormComponent(cookieService, dateTimeService, notificationService) {
        this.cookieService = cookieService;
        this.dateTimeService = dateTimeService;
        this.notificationService = notificationService;
        this.add = new EventEmitter();
        this.date = { year: 2020, month: 1, day: 30 };
        this.time = { hour: 13, minute: 0 };
    }
    FormComponent.prototype.addReminder = function () {
        if (!this.bodyValid() || !this.dateValid()) {
            return;
        }
        this.reminder = this.newReminder();
        this.add.emit(this.reminder);
    };
    FormComponent.prototype.bodyValid = function () {
        if (this.body == "") {
            return false;
        }
        else {
            return true;
        }
    };
    FormComponent.prototype.dateValid = function () {
        if (this.dateTimeService.getDateTimeFromJSON(this.date, this.time) < this.dateTimeService.getDateTimeNow()) {
            return false;
        }
        else {
            return true;
        }
    };
    FormComponent.prototype.newReminder = function () {
        var timeToWork = this.dateTimeService.getDateTimeFromJSON(this.date, this.time);
        return new Reminder(this.body, timeToWork, this.cookieService.get("RemindrsApp"));
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "add", void 0);
    FormComponent = __decorate([
        Component({
            selector: 'form-reminders',
            templateUrl: './form.component.html',
        }),
        __metadata("design:paramtypes", [CookieService,
            DateTimeService,
            NotificationService])
    ], FormComponent);
    return FormComponent;
}());
export { FormComponent };
//# sourceMappingURL=form.component.js.map
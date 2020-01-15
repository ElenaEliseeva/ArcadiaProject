var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Reminder } from './reminder/reminder';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.date = { year: 2020, month: 1, day: 30 };
        this.time = { hour: 13, minute: 30 };
        this.body = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadReminders();
    };
    AppComponent.prototype.loadReminders = function () {
        var _this = this;
        this.dataService.getReminders()
            .subscribe(function (data) { return _this.reminders = data; });
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        if (this.reminder.idReminder == null) {
            this.dataService.createReminder(this.reminder)
                .subscribe(function (data) { return _this.reminders.push(data); });
        }
        else {
            this.dataService.updateReminder(this.reminder)
                .subscribe(function (data) { return _this.loadReminders(); });
        }
        this.cancel();
    };
    AppComponent.prototype.editReminder = function (r) {
        this.reminder = r;
    };
    AppComponent.prototype.cancel = function () {
        this.reminder = this.newReminder();
    };
    AppComponent.prototype.delete = function (r) {
        var _this = this;
        this.dataService.deleteReminder(r.idReminder)
            .subscribe(function (data) { return _this.loadReminders(); });
    };
    AppComponent.prototype.add = function () {
        this.cancel();
        this.save();
    };
    AppComponent.prototype.newReminder = function () {
        var timeToWork = this.date['year'] + "/" + this.date['month'] + "/" + this.date['day'] + " "
            + this.time['hour'] + ":" + this.time['hour'];
        return new Reminder(null, this.body, timeToWork, 1, 1);
    };
    AppComponent = __decorate([
        Component({
            selector: 'purchase-app',
            templateUrl: './app.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
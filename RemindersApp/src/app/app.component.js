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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from './http.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.reminders = [];
        this.date = { year: 2020, month: 1, day: 30 };
        this.time = { hour: 13, minute: 30 };
        this.appForm = new FormGroup({
            "remindersBody": new FormControl("Текст напоминания", Validators.required),
            "remindersDate": new FormControl("", Validators.required),
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getReminders().subscribe(function (data) { return _this.reminders = data; });
    };
    AppComponent.prototype.addItem = function (body, date, time) {
        if (body == null || body.trim() == "")
            return;
        /*var timeToWork = date['year'] + "/" + date['month'] + "/" + date['day'] + " " + time['hour'] + ":" + time['hour'];
        this.reminders.push(new Reminder(4, body, timeToWork, 1, 1));*/
    };
    AppComponent = __decorate([
        Component({
            selector: 'purchase-app',
            templateUrl: './app.component.html',
            providers: [HttpService]
        }),
        __metadata("design:paramtypes", [HttpService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { PushNotificationsService } from "ng-push";
var NotificationService = /** @class */ (function () {
    function NotificationService(pushNotificationsService) {
        this.pushNotificationsService = pushNotificationsService;
    }
    NotificationService.prototype.requestPermission = function () {
        this.pushNotificationsService.requestPermission();
    };
    NotificationService.prototype.checkNotification = function (reminders) {
        var _this = this;
        var date = new Date();
        if (date.getSeconds() == 0) {
            var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
            var timeNow = new Date().toLocaleString('ko-KR', options);
            reminders.forEach(function (reminder) {
                if (reminder.timeToWork == timeNow) {
                    _this.pushNotification(reminder.body);
                }
            });
        }
    };
    NotificationService.prototype.pushNotification = function (body) {
        this.pushNotificationsService.create(body, { body: 'Reminders App' }).subscribe();
    };
    NotificationService.prototype.premissionGranted = function () {
        if (this.pushNotificationsService.permission == 'granted') {
            return true;
        }
        else {
            return false;
        }
    };
    NotificationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [PushNotificationsService])
    ], NotificationService);
    return NotificationService;
}());
export { NotificationService };
//# sourceMappingURL=notification.service.js.map
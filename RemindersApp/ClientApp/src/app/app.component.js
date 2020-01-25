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
import { CookieService } from "ngx-cookie-service";
import { NotificationService } from './services/notification.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(cookieService, notificationsService) {
        this.cookieService = cookieService;
        this.notificationsService = notificationsService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.cookieService.check("RemindrsApp")) {
            this.cookieService.set("RemindrsApp", this.newCookie(8));
        }
        setInterval(function () { _this.notificationsService.checkNotification(_this.reminders); }, 1000);
    };
    AppComponent.prototype.newCookie = function (length) {
        var cookie = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            cookie += possible.charAt(Math.floor(Math.random() * possible.length));
        return cookie;
    };
    AppComponent = __decorate([
        Component({
            selector: 'reminders-app',
            templateUrl: './app.component.html',
        }),
        __metadata("design:paramtypes", [CookieService,
            NotificationService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
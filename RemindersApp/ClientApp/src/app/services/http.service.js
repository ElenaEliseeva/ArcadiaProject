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
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
var HttpService = /** @class */ (function () {
    function HttpService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.url = "http://localhost:5000/api/Reminders";
    }
    HttpService.prototype.getReminders = function () {
        return this.http.get(this.url + '/' + this.cookieService.get("RemindrsApp"));
    };
    HttpService.prototype.createReminder = function (reminder) {
        return this.http.post(this.url, reminder);
    };
    HttpService.prototype.deleteReminder = function (idReminder) {
        return this.http.delete(this.url + '/' + idReminder);
    };
    HttpService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, CookieService])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var DateTimeService = /** @class */ (function () {
    function DateTimeService() {
    }
    DateTimeService.prototype.getDateTimeNow = function () {
        var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        return new Date().toLocaleString('ko-KR', options);
    };
    DateTimeService.prototype.getDateTimeFromJSON = function (date, time) {
        return date['year'] + ". "
            + this.zero(date['month']) + date['month'] + ". "
            + this.zero(date['day']) + date['day'] + ". "
            + this.zero(time['hour']) + time['hour'] + ":"
            + this.zero(time['minute']) + time['minute'];
    };
    DateTimeService.prototype.zero = function (num) {
        if (num <= 9) {
            return "0";
        }
        else {
            return "";
        }
        ;
    };
    DateTimeService = __decorate([
        Injectable()
    ], DateTimeService);
    return DateTimeService;
}());
export { DateTimeService };
//# sourceMappingURL=datetime.service.js.map
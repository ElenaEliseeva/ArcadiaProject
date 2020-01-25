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
import { HttpService } from '../services/http.service';
var ListComponent = /** @class */ (function () {
    function ListComponent(httpService) {
        this.httpService = httpService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loadReminders();
    };
    ListComponent.prototype.loadReminders = function () {
        var _this = this;
        this.httpService.getReminders()
            .subscribe(function (data) { return _this.reminders = data; });
    };
    ListComponent.prototype.delete = function (r) {
        var _this = this;
        this.httpService.deleteReminder(r.idReminder)
            .subscribe(function (data) { return _this.loadReminders(); });
    };
    ListComponent.prototype.done = function (reminder) {
        var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        var timeNow = new Date().toLocaleString('ko-KR', options);
        if (reminder.timeToWork > timeNow) {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ListComponent.prototype, "reminders", void 0);
    ListComponent = __decorate([
        Component({
            selector: 'list-reminders',
            templateUrl: './list.component.html',
        }),
        __metadata("design:paramtypes", [HttpService])
    ], ListComponent);
    return ListComponent;
}());
export { ListComponent };
//# sourceMappingURL=list.component.js.map
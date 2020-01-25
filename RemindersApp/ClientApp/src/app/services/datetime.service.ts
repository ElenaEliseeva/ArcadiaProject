import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeService {

    getDateTimeNow():string {
        var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        return new Date().toLocaleString('ko-KR', options);
    }

    getDateTimeFromJSON(date: { year: number, month: number, day: number },
        time: { hour: number, minute: number }): string {
        return date['year'] + ". "
            + this.zero(date['month']) + date['month'] + ". "
            + this.zero(date['day']) + date['day'] + ". "
            + this.zero(time['hour']) + time['hour'] + ":"
            + this.zero(time['minute']) + time['minute'];
    }

    zero(num: number): string {
        if (num <= 9) {
            return "0";
        } else {
            return "";
        };
    }
}
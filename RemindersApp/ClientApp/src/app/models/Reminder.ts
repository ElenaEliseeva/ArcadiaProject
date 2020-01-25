export class Reminder {
    idReminder?: number;
    body: string;
    timeToWork: string;
    cookie: string;

    constructor(body: string, timeToWork: string, cookie: string, idReminder?: number) {
        this.idReminder = idReminder;
        this.body = body;
        this.timeToWork = timeToWork;
        this.cookie = cookie;
    }

    
}
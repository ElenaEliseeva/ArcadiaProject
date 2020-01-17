export class Reminder {
    idReminder?: number;
    body: string;
    timeToWork: string;

    constructor(body: string, timeToWork: string, idReminder?: number) {
        this.idReminder = idReminder;
        this.body = body;
        this.timeToWork = timeToWork;
    }

    
}
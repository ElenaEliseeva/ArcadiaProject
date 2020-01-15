export class Reminder {
    idReminder: number;
    body: string;
    timeToWork: string;
    idPriority: number;
    idCookie: number;

    constructor(idReminder: number, body: string, timeToWork: string, idPriority: number, idCookie: number) {
        this.idReminder = idReminder;
        this.body = body;
        this.timeToWork = timeToWork;
        this.idPriority = idPriority;
        this.idCookie = idCookie;
    }
}
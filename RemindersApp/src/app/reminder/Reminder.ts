export class Reminder {
    idReminder: number;
    body: string;
    timeToWork: string;
    idPriority: number;
    idCookie: number;

    constructor(id: number, body: string, timeToWork: string, idPriority: number, idCookie: number) {
        this.idReminder = id;
        this.body = body;
        this.timeToWork = timeToWork;
        this.idPriority = idPriority;
        this.idCookie = idCookie;
    }
}
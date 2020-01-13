export class Reminder {
    id: number;
    body: string;
    timeToWork: string;
    idPriority: number;
    idCookie: number;


    constructor(id: number, body: string, timeToWork: string, idPriority: number, idCookie: number) {
        this.id = id;
        this.body = body;
        this.timeToWork = timeToWork;
        this.idPriority = idPriority;
        this.idCookie = idCookie;
    }
}
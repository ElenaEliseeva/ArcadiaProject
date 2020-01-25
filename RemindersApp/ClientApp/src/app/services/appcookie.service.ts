import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AppCookieService {
    constructor(private cookieService: CookieService) {
    }

    checkOrSetCookie() {
        if (!this.cookieService.check("RemindrsApp")) {
            this.cookieService.set("RemindrsApp", this.newCookie(8));
        } 
    }

    newCookie(length: number): string {
        var cookie = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            cookie += possible.charAt(Math.floor(Math.random() * possible.length));

        return cookie;
    }
}
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { PushNotificationsModule } from "ng-push";

import { ListComponent } from "./list/list.component";
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, 
        NgbModule, HttpClientModule, PushNotificationsModule],
    declarations: [AppComponent, ListComponent],
    bootstrap: [AppComponent],
    providers: [CookieService]
})

export class AppModule { }
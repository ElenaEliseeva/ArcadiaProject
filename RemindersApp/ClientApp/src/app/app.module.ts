﻿import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { PushNotificationsModule } from "ng-push";

import { ListComponent } from "./components/list/list.component";
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { NotificationService } from './services/notification.service'
import { DateTimeService } from './services/datetime.service';
import { AppCookieService } from './services/appcookie.service';

@NgModule({
    imports: [BrowserModule, FormsModule, 
        NgbModule, HttpClientModule, PushNotificationsModule],
    declarations: [AppComponent, ListComponent, FormComponent],
    bootstrap: [AppComponent],
    providers: [CookieService, HttpService, NotificationService, DateTimeService, AppCookieService]
})

export class AppModule { }
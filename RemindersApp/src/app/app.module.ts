import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule, NgbModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
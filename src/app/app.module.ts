import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastMessagesComponent } from './shared/components/toast-messages/toast-messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './shared/interceptors/http-error.interceptor';
import { CalculatorComponent } from './shared/components/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToastMessagesComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

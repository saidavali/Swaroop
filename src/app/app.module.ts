import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { FooterComponentComponent } from './component/footer-component/footer-component.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { HelpComponentComponent } from './component/help-component/help-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MainComponentComponent,
    HelpComponentComponent
  ],
  imports: [
    BrowserModule,CommonModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

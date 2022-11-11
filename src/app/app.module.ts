import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './UI/components/sidebar/sidebar.component';
import { NavbarComponent } from './UI/components/navbar/navbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ItemsComponent } from './UI/pages/items/items.component';
import { AccountsComponent } from './UI/pages/accounts/accounts.component';
import { DashboardComponent } from './UI/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ItemsComponent,
    AccountsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

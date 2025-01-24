import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpcomingfilmsComponent } from './upcomingfilms/upcomingfilms.component';
import { CastComponent } from './cast/cast.component';
import { McuService } from './mcu.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpcomingfilmsComponent,
    CastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [McuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

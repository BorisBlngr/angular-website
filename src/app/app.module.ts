import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSidenavModule} from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

// Google Map
import { AgmCoreModule } from 'angular2-google-maps/core';

// Table
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {AppComponent} from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { TarifsComponent } from './components/tarifs/tarifs.component';
import { HeaderBackgroundComponent } from './components/header-background/header-background.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    TarifsComponent,
    HeaderBackgroundComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    MdToolbarModule,
    MdMenuModule,
    AppRoutingModule,
    MdCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7dcxkLORqvyzSZOnEHJz8QS5LG3zKQ_M'
    }),
    NgxDatatableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

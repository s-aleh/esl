import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule, MatFormFieldModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VerbsModule } from './verbs/verbs.module';

import { HeaderComponent } from './layouts/header/header.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { StartPageComponent } from './layouts/start-page/start-page.component';

import { ContentService } from  './services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    StartPageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    VerbsModule,
    AppRoutingModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


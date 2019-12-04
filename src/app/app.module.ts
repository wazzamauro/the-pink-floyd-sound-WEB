import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicianComponent } from './musicianComponent/musician.component';

import { FormsModule } from '@angular/forms';

import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MusucianDetailComponentComponent } from './musucian-detail-component/musucian-detail-component.component';

const appRoutes: Routes= [
  {
    path:'musicians',
    component: MusicianComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MusicianComponent,
    MusucianDetailComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

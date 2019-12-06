import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { MusicianServicesService } from './musicianServices/musician-services.service';
import { MusicianComponent } from './musician-component/musician.component';
import { MusicianDetailComponentComponent } from './musician-detail-component/musician-detail-component.component';

import { PersonComponentComponent } from './person-component/person-component.component';
import { PersonServicesService } from './personServices/person-services.service';

const appRoutes: Routes = [
  {
    path: 'musicians',
    pathMatch:'full',
    component: MusicianComponent
  },
  {
    path: 'person',
    pathMatch:'full',
    component: PersonComponentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MusicianComponent,
    MusicianDetailComponentComponent,
    PersonComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [MusicianServicesService, PersonServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

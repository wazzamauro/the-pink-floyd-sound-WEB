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
import { PersonDetailComponentComponent } from './person-detail-component/person-detail-component.component';
import { SelectionComponentComponent } from './selection-component/selection-component.component';
import { PathRegistry } from './selection-component/PathRegistry.enum';
import { ContentComponentComponent } from './content-component/content-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

const appRoutes: Routes = [
  {
    path: PathRegistry.ROOT, component: ContentComponentComponent, children: [
      { path: PathRegistry.MUSICIAN, component: MusicianComponent },
      { path: PathRegistry.PERSON, component: PersonComponentComponent }
    ]
  }

]

@NgModule({
  declarations: [
    AppComponent,
    MusicianComponent,
    MusicianDetailComponentComponent,
    PersonComponentComponent,
    PersonDetailComponentComponent,
    SelectionComponentComponent,
    ContentComponentComponent,
    HeaderComponentComponent
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

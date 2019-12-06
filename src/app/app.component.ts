import { Component } from '@angular/core';
import {PersonServicesService} from './personServices/person-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Pink Floyd Sound';
  private personService:PersonServicesService;

  constructor(){

  }

  importPerson():void{
    this.personService.importPerson();
  }
}

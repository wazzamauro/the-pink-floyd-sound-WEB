import { Component, Input, Output } from '@angular/core';
import { PersonServicesService } from './personServices/person-services.service';
import { Observable } from 'rxjs';
import { Person } from './person';
import { PersonComponentComponent } from './person-component/person-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPerson: Person;
  status:string;

  constructor(private personService: PersonServicesService) {
  }

  importPerson() {
    this.personService.importPerson().subscribe(status => this.status = status);
  }

  onSelect(person: Person) {
    this.selectedPerson = person;
  }

}

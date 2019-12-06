import { Component, OnInit } from '@angular/core';
import { PersonServicesService } from '../personServices/person-services.service'
import { Person } from '../person';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',
  styleUrls: ['./person-component.component.css']
})
export class PersonComponentComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonServicesService) {
  }

  ngOnInit() {
  }

  fetchPerson() {
    this.personService.fetchPerson().subscribe(persons => this.persons = persons);
  }


}

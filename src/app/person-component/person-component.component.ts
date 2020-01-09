import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { PersonServicesService } from '../personServices/person-services.service'
import { Person } from '../person';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',
  styleUrls: ['./person-component.component.css']
})
export class PersonComponentComponent implements OnInit {

  @Input() persons: Person[];
  selectedPerson: Person;

  constructor(private personService: PersonServicesService) {
  }

  ngOnInit() {
  }

  onSelect(person: Person) {
    this.selectedPerson = person;
  }
}
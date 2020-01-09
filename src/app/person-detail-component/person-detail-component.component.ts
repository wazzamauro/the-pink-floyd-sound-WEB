import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-detail-component',
  templateUrl: './person-detail-component.component.html',
  styleUrls: ['./person-detail-component.component.css']
})
export class PersonDetailComponentComponent implements OnInit {

  @Input() person:Person;
  constructor() { }

  ngOnInit() {
  }

}

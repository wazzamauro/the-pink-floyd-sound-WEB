import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician';

import { MUSICIANS } from '../mock-musicians';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css']
})
export class MusicianComponent implements OnInit {

  musicians = MUSICIANS;

  selectedMusician: Musician;
  onSelect(musician: Musician){
    this.selectedMusician = musician;
  }

  constructor() { }

  ngOnInit() {
  }

  musician: Musician = {
    id: 1,
    name: 'Roger',
    surname: 'Waters',
    age: 75
  };
}

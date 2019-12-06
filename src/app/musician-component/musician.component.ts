import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician';
import {MusicianServicesService} from '../musicianServices/musician-services.service'

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
  
  musician$;

  constructor(private musicianService: MusicianServicesService){
   
  }

  fetchMusician(){
    this.musician$ = this.musicianService.fetchMusician();
  }

  ngOnInit() {
  }


}

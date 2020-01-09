import { Component, OnInit, Input } from '@angular/core';
import { PersonServicesService } from '../personServices/person-services.service';
import { Person } from '../person';
import { MusicianServicesService } from '../musicianServices/musician-services.service';
import { Musician } from '../musician';
import { Router } from '@angular/router';
import { PathRegistry } from './PathRegistry.enum';

@Component({
  selector: 'app-selection-component',
  templateUrl: './selection-component.component.html',
  styleUrls: ['./selection-component.component.css']
})
export class SelectionComponentComponent implements OnInit {

  persons: Person[];
  personStatus: string;
  musicians: Musician[];
  musicianStatus: string;

  constructor(private router: Router, private personService: PersonServicesService, private musicianService: MusicianServicesService) { 

  }

  ngOnInit() {
    (<HTMLInputElement> document.getElementById("top-nav")).style.visibility = "visible";
  }

  importPerson(){
    this.personService.importPerson().subscribe(status => this.personStatus = status);
    this.showGetPersonButton();
    this.disableStartAppButton();
  }

  getPerson() {
    this.personService.fetchPerson().subscribe(persons => this.persons = persons);
    this.showCreateBandButton();
  }
  
  importMusicians() {
    this.musicianService.importMusician().subscribe(status => this.musicianStatus = status);
    this.showGetMusiciansButton();
    this.disableCreateBandButton();
  }

  getMusicians() {
    this.musicianService.fetchMusician().subscribe(musicians => this.musicians = musicians);
  }

  showPersonComponent() {
    (<HTMLInputElement> document.getElementById("personComponent")).style.display = "block";
    (<HTMLInputElement> document.getElementById("musicianComponent")).style.display = "none";
  }

  showMusicianComponent() {
    (<HTMLInputElement> document.getElementById("personComponent")).style.display = "none";
    (<HTMLInputElement> document.getElementById("musicianComponent")).style.display = "block";
  }

  showGetPersonButton() {
    (<HTMLInputElement> document.getElementById("top-nav-gp")).style.visibility = "visible";
  }

  showCreateBandButton() {
    (<HTMLInputElement> document.getElementById("top-nav-cb")).style.visibility = "visible";
  }

  showGetMusiciansButton() {
    (<HTMLInputElement> document.getElementById("top-nav-gm")).style.visibility = "visible";
  }

  disableStartAppButton(){
    (<HTMLInputElement> document.getElementById("top-nav-fp")).disabled = true;
  }

  disableCreateBandButton() {
    (<HTMLInputElement>document.getElementById("top-nav-cb")).disabled = true;
  }

/*
  goToPerson() {
    this.router.navigateByUrl(PathRegistry.PERSON);
  }

  goToMusician(){
    this.router.navigateByUrl(PathRegistry.MUSICIAN);
  }
  */
}

import { Component, OnInit, Input } from '@angular/core';
import { Musician } from '../musician';
import { MusicianServicesService } from '../musicianServices/musician-services.service'

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css']
})
export class MusicianComponent implements OnInit {

  @Input() musicians: Musician[];
  selectedMusician: Musician;

  constructor(private musicianService: MusicianServicesService) {
  }

  ngOnInit() {
  }

  onSelect(musician: Musician) {
    this.selectedMusician = musician;
  }
}
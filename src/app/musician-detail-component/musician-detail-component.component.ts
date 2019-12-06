import { Component, OnInit, Input } from '@angular/core';
import{Musician} from '../musician';

@Component({
  selector: 'app-musician-detail-component',
  templateUrl: './musician-detail-component.component.html',
  styleUrls: ['./musician-detail-component.component.css']
})
export class MusicianDetailComponentComponent implements OnInit {

  @Input()
  musician:Musician;
  constructor() { }

  ngOnInit() {
  }

}

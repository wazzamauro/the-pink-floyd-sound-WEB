import { Component, OnInit, Input } from '@angular/core';
import{Musician} from '../musician';

@Component({
  selector: 'app-musucian-detail-component',
  templateUrl: './musucian-detail-component.component.html',
  styleUrls: ['./musucian-detail-component.component.css']
})
export class MusucianDetailComponentComponent implements OnInit {

  @Input()
  musician:Musician;
  constructor() { }

  ngOnInit() {
  }

}

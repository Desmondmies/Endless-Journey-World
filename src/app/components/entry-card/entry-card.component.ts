import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.css']
})
export class EntryCardComponent {

  @Input() public entryData : any;
  @Input() public entryName : any;

  constructor() { }

}

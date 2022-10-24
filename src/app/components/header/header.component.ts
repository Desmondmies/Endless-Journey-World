import { Component, OnInit } from '@angular/core';
import {Globals} from "../../_GLOBAL/globals";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ Globals ]
})
export class HeaderComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

}

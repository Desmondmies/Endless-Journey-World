import { Component, OnInit } from '@angular/core';
import {Globals} from "../../_GLOBAL/globals";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ Globals ]
})
export class HomePageComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-icon',
  templateUrl: './dot-icon.component.html',
  styleUrls: ['./dot-icon.component.css']
})
export class DotIconComponent implements OnInit {

  @Input() public Radius : string = "";
  @Input() public Color : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

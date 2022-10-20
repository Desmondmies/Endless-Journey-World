import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer-iconbar',
  templateUrl: './footer-iconbar.component.html',
  styleUrls: ['./footer-iconbar.component.css']
})
export class FooterIconbarComponent {

  @Input() public isHandset: boolean | null = true;

}

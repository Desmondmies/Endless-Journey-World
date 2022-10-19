import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<app-navigation (switchThemeEvent)="switchTheme($event)"></app-navigation>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Endless-Journey-World';
  isAlternativeTheme: boolean = false;

  switchTheme(event: boolean) {
    this.isAlternativeTheme = !this.isAlternativeTheme;
    console.log("theme!!: " + this.isAlternativeTheme);
  }
}

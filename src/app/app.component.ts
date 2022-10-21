import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-root',
  //template: '<app-navigation (switchThemeEvent)="switchTheme($event)"></app-navigation>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver){}

  title = 'Endless-Journey-World';
  isAlternativeTheme: boolean = false;

  switchTheme(event: boolean) {
    this.isAlternativeTheme = !this.isAlternativeTheme;
  }
}

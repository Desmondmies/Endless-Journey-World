import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @Output()
  switchThemeEvent = new EventEmitter<boolean>();
  currentTheme: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver){}

  switchTheme() {
    setTimeout( () => {
      this.currentTheme = !this.currentTheme;
      this.switchThemeEvent.emit(this.currentTheme);
    }, 175);
  }
}

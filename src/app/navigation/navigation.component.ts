import {Component, EventEmitter, Output} from '@angular/core';
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

  constructor(private breakpointObserver: BreakpointObserver) {}

  @Output()
  switchThemeEvent = new EventEmitter<boolean>();

  currentTheme: boolean = false;

  switchTheme() {
    this.currentTheme = !this.currentTheme;
    this.switchThemeEvent.emit(this.currentTheme);
  }
}

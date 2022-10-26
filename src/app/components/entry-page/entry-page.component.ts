import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {

  entry: any;
  entryName: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe( map(() => window.history.state) )
      .subscribe( res => {
        this.entry = res['entry'];
        this.entryName = res['name'];
      })

    if (this.entry == null)
      this.routeToHome();
  }

  routeToHome(): any{
    this.router.navigate(['/'])
  }

}

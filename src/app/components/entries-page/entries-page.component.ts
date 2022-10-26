import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-entries-page',
  templateUrl: './entries-page.component.html',
  styleUrls: ['./entries-page.component.css']
})
export class EntriesPageComponent implements OnInit {

  entries: any;
  name: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap
      .pipe( map(() => window.history.state) )
      .subscribe( res => {
        this.entries = res['entries'];
        this.name = res['name'];
      })

    if (this.entries == null)
      this.routeToHome();
  }

  routeToHome(): any{
    this.router.navigate(['/'])
  }

}

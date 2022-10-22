import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent{

  @Input() public imgPath : string = "";
  @Input() public categoryName : string = "";
  @Input() public onClickRoutes : string = "";
  @Input() public catIcon : string = "";
  @Input() public subtitleDay : string = "";

  constructor() { }
}

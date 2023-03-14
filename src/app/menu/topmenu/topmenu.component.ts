import {Component, Input} from '@angular/core';
import {Menu} from "../../../model/menu";

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent {
  @Input() menuItems: Array<Menu> = [];
}

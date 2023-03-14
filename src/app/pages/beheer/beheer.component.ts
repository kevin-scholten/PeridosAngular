import { Component } from '@angular/core';
import {Menu} from "../../../model/menu";

@Component({
  selector: 'app-beheer',
  templateUrl: './beheer.component.html',
  styleUrls: ['./beheer.component.scss']
})
export class BeheerComponent {
  sideMenuItems: Map<Menu, Array<Menu>> = Menu.getSideMenuItemsForTop(Menu.BEHEER);
}

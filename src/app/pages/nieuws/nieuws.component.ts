import { Component } from '@angular/core';
import {Menu} from "../../../model/menu";

@Component({
  selector: 'app-nieuws',
  templateUrl: './nieuws.component.html',
  styleUrls: ['./nieuws.component.scss']
})
export class NieuwsComponent {
  sideMenuItems: Map<Menu, Array<Menu>> = Menu.getSideMenuItemsForTop(Menu.NIEUWS);
}

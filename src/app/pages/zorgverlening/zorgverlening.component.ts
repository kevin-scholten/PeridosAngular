import { Component } from '@angular/core';
import {Menu} from "../../../model/menu";

@Component({
  selector: 'app-zorgverlening',
  templateUrl: './zorgverlening.component.html',
  styleUrls: ['./zorgverlening.component.scss']
})
export class ZorgverleningComponent {
  sideMenuItems: Map<Menu, Array<Menu>> = Menu.getSideMenuItemsForTop(Menu.ZORGVERLENING);
}

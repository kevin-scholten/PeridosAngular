import {Component, Input} from '@angular/core';
import {Menu} from "../../../model/menu";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  @Input() sideMenuItems: Map<Menu, Array<Menu>> | undefined
}
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.sidebar .nav-link').forEach(function(element){

    element.addEventListener('click', function (e) {


    }); // addEventListener
  }) // forEach
});

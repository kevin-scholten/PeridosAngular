import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NieuwsComponent} from "./pages/nieuws/nieuws.component";
import {BeheerComponent} from "./pages/beheer/beheer.component";
import {ZorgverleningComponent} from "./pages/zorgverlening/zorgverlening.component";

const routes: Routes = [
  { path: '', component: NieuwsComponent },
  { path: 'nieuws', component: NieuwsComponent },
  { path: 'beheer', component: BeheerComponent },
  { path: 'zorgverlening', component: ZorgverleningComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

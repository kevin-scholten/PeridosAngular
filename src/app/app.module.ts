import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NieuwsComponent } from './pages/nieuws/nieuws.component';
import { BeheerComponent } from './pages/beheer/beheer.component';
import { ZorgverleningComponent } from './pages/zorgverlening/zorgverlening.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopmenuComponent } from './menu/topmenu/topmenu.component';
import { SidemenuComponent } from './menu/sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NieuwsComponent,
    BeheerComponent,
    ZorgverleningComponent,
    TopmenuComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

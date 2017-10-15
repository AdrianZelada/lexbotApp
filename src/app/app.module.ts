import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,AppComponents } from './app.route';
import { AppComponent } from './app.component';
import { SidebarModule} from 'ng-sidebar';
import { ModalModule} from 'ngx-bootstrap/modal';
import { DetailsItemComponent} from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    AppComponents
  ],
  entryComponents:[
    DetailsItemComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

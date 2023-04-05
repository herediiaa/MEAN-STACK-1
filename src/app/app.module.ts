import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserDetailsComponent,
    UserListComponent,
    UserEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

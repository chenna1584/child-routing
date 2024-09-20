import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAnnouncementsComponent } from './user-announcements/user-announcements.component';



@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserAnnouncementsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAnnouncementsComponent } from './user-announcements/user-announcements.component';
 
const routes: Routes = [
{
path: 'user',
component: UserComponent,
children: [
{
path: 'list',
component: UserListComponent
},
{
path: 'announcements',
component: UserAnnouncementsComponent
}
]
}
];
 
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UserRoutingModule { }
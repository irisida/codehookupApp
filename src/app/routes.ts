import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';

/**
 * angular router opeates on a first match wins
 * basis. When travesrsing, if no explicit match
 * is found then the wildcard applies and with
 * redirectto set and pathmatch set to full the
 * user is taken to the home route.
 */

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MemberListComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'lists', component: ListsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

/**
 * angular router opeates on a first match wins
 * basis. When travesrsing, if no explicit match
 * is found then the wildcard applies and with
 * redirectto set and pathmatch set to full the
 * user is taken to the home route.
 */

export const appRoutes: Routes = [
  /**
   * path is specified as nothing so that
   * it will land and lower down redirect
   * to the home component.
   * This covers a user cutting and
   * pasting URLs to another browser
   * window.
   */
  { path: '', component: HomeComponent },
  {
    /**
     * path is specified as an emty strings so
     * that it can match on the chidren routes
     * provided in the children array.
     */
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent }
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ListUsersComponent } from './management/user/list-users/list-users.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'management/list-users',
    component: ListUsersComponent
  }
];

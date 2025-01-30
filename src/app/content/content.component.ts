import { Component } from '@angular/core';
import { ListUsersComponent } from '../management/user/list-users/list-users.component';
import { CreateUsersComponent } from "../management/user/create-users/create-users.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  standalone: true,
  imports: [ListUsersComponent, CreateUsersComponent]
})
export class ContentComponent {}

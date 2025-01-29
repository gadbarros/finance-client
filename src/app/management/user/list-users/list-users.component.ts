import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from '../model/user.model';

@Component({
  selector: 'app-list-users',
  standalone: true,  
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
  imports: [MatTableModule]
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'lastModification'];
  users: User[] = [];

  ngOnInit(): void {
    this.getAllUsers().then((users) => this.users = users);
  }

  async getAllUsers(): Promise<User[]> {
    const res = await fetch(`https://localhost:7227/user/getall`);
    return await (res.json() as Promise<User[]>);  
  }
}

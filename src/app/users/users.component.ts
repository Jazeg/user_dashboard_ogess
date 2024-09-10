import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  displayedColumns: string[] = ['name', 'email', 'role'];
  dataSource: User[] = [
    {name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin'},
    {name: 'Bob Smith', email: 'bob@example.com', role: 'User'},
    {name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor'},
    {name: 'Diana Ross', email: 'diana@example.com', role: 'User'},
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Implementar lógica de filtrado aquí
  }
}
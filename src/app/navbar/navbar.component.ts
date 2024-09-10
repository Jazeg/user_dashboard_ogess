import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userName: string = 'Usuario'; // Esto debería venir de un servicio de autenticación

  logout() {
    // Implementar lógica de cierre de sesión
    console.log('Logout clicked');
  }
}
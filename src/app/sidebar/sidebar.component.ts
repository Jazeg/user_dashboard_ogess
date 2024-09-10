// sidebar.component.ts
import { Component, ViewEncapsulation } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUsers, faCog, faFileImport, faBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isCollapsed = false;

  constructor(library: FaIconLibrary) {
    library.addIcons(faHome, faUsers, faCog, faFileImport, faBars);
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  openFileImportDialog() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log('Archivo seleccionado:', file.name);
        // Aquí puedes manejar el archivo seleccionado
        // Por ejemplo, enviarlo a un servicio para procesarlo
      }
    };
    fileInput.click();
  }
}
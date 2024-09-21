import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  // Méthode pour basculer l'ouverture et la fermeture de la sidebar
  toggleNav() {
    const sidebar = document.getElementById('mySidebar');
    if (sidebar) {
      sidebar.classList.toggle('closed');
    }
  }

  // Méthode pour basculer l'affichage des sous-menus
  toggleDropdown(dropdownId: string) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
      dropdown.classList.toggle('show');
    }
  }
}

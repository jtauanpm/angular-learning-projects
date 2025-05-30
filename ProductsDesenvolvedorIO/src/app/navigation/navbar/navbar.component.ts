import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarItem } from '../../interfaces/navbar-item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-navbar",
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  public navbarItems: NavbarItem[] = [
    // { name: "Sobre", path: "/about", exact: true },
    // { name: "Contato", path: "/contact" },
    { name: "Cadastro", path: "/cadastro" },
    { name: "Produtos", path: "/products" },
    { name: "Data Binding", path: "/databinding" },
    { name: "RxJS", path: "/rxjs" },
    { name: "To do", path: "/todo" },
    { name: "Counter", path: "/counter" },
    { name: "Movies", path: "/movies" },
    { name: "Bar", path: "/bar-di-zones" },
    { name: "Admin", path: "/admin" },
  ];
}
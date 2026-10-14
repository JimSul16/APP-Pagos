import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {
  productosDestacados = [
    { nombre: 'Laptop Gamer Pro 16"', precio: 1250.00, categoria: 'Portátiles', icon: 'laptop-outline' },
    { nombre: 'Monitor Curvo 4K 32"', precio: 420.00, categoria: 'Pantallas', icon: 'desktop-outline' },
    { nombre: 'Teclado Mecánico RGB', precio: 75.50, categoria: 'Periféricos', icon: 'hardware-chip-outline' },
    { nombre: 'Mouse Inalámbrico Gaming', precio: 45.00, categoria: 'Periféricos', icon: 'game-controller-outline' }
  ];

  constructor(private router: Router) {}

  irACompra() {
    this.router.navigate(['/tabs/tab2']);
  }
}

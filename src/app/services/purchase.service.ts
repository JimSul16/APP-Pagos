import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  producto = '';
  cantidad = 0;
  precioUnitario = 0;
  subtotal = 0;

  setPurchase(producto: string, cantidad: number, precioUnitario: number): void {
    this.producto = producto;
    this.cantidad = cantidad;
    this.precioUnitario = precioUnitario;
    this.subtotal = cantidad * precioUnitario;
  }

  reset(): void {
    this.producto = '';
    this.cantidad = 0;
    this.precioUnitario = 0;
    this.subtotal = 0;
  }

  hasPurchase(): boolean {
    return this.subtotal > 0;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})
export class Tab3Page {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public purchaseService: PurchaseService
  ) {
    this.form = this.fb.group({
      descuento: [0, [Validators.min(0), Validators.max(100)]],
      dineroRecibido: [0, [Validators.min(0)]]
    });
  }

  ionViewWillEnter(): void {
    if (!this.purchaseService.hasPurchase()) {
      this.router.navigate(['/tabs/tab2']);
    }
  }

  get descuento(): number {
    return Number(this.form.get('descuento')?.value) || 0;
  }

  get dineroRecibido(): number {
    return Number(this.form.get('dineroRecibido')?.value) || 0;
  }

  get montoDescuento(): number {
    return this.purchaseService.subtotal * (this.descuento / 100);
  }

  get totalFinal(): number {
    return this.purchaseService.subtotal - this.montoDescuento;
  }

  get diferencia(): number {
    return this.dineroRecibido - this.totalFinal;
  }

  get esCambio(): boolean {
    return this.diferencia >= 0;
  }

  nuevaCompra(): void {
    this.purchaseService.reset();
    this.form.reset({ descuento: 0, dineroRecibido: 0 });
    this.router.navigate(['/tabs/tab2']);
  }
}

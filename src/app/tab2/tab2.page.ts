import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})
export class Tab2Page {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private purchaseService: PurchaseService
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cantidad: [null, [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')]],
      precioUnitario: [null, [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { nombre, cantidad, precioUnitario } = this.form.value;
    this.purchaseService.setPurchase(nombre, Number(cantidad), Number(precioUnitario));
    this.router.navigate(['/tabs/tab3']);
  }
}

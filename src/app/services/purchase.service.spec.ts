import { TestBed } from '@angular/core/testing';
import { PurchaseService } from './purchase.service';

describe('PurchaseService', () => {
  let service: PurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseService);
  });

  it('should be created with initial empty state', () => {
    expect(service).toBeTruthy();
    expect(service.producto).toBe('');
    expect(service.cantidad).toBe(0);
    expect(service.precioUnitario).toBe(0);
    expect(service.subtotal).toBe(0);
    expect(service.hasPurchase()).toBe(false);
  });

  it('should correctly set purchase and calculate subtotal', () => {
    service.setPurchase('Laptop Gamer', 2, 1250.50);
    expect(service.producto).toBe('Laptop Gamer');
    expect(service.cantidad).toBe(2);
    expect(service.precioUnitario).toBe(1250.50);
    expect(service.subtotal).toBe(2501.00);
    expect(service.hasPurchase()).toBe(true);
  });

  it('should reset all purchase data when reset() is called', () => {
    service.setPurchase('Audífonos', 3, 25.00);
    expect(service.hasPurchase()).toBe(true);

    service.reset();
    expect(service.producto).toBe('');
    expect(service.cantidad).toBe(0);
    expect(service.precioUnitario).toBe(0);
    expect(service.subtotal).toBe(0);
    expect(service.hasPurchase()).toBe(false);
  });
});

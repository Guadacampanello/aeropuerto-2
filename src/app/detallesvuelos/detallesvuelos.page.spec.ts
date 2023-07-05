import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesvuelosPage } from './detallesvuelos.page';

describe('DetallesvuelosPage', () => {
  let component: DetallesvuelosPage;
  let fixture: ComponentFixture<DetallesvuelosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallesvuelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

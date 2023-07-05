import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListavuelosPage } from './listavuelos.page';

describe('ListavuelosPage', () => {
  let component: ListavuelosPage;
  let fixture: ComponentFixture<ListavuelosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListavuelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

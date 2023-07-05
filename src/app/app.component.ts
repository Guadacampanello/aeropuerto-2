import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista Vuelos', url: '/listavuelos', icon: 'list' },
    { title: 'Detalles Vuelos', url: '/detallesvuelos', icon: 'airplane' },
  ];
  public labels = [];
  constructor() {}
}

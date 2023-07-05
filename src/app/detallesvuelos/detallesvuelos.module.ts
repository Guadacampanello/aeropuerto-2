import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesvuelosPageRoutingModule } from './detallesvuelos-routing.module';

import { DetallesvuelosPage } from './detallesvuelos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesvuelosPageRoutingModule
  ],
  declarations: [DetallesvuelosPage]
})
export class DetallesvuelosPageModule {}

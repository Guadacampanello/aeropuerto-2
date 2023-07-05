import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListavuelosPageRoutingModule } from './listavuelos-routing.module';

import { ListavuelosPage } from './listavuelos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListavuelosPageRoutingModule
  ],
  declarations: [ListavuelosPage]
})
export class ListavuelosPageModule {}

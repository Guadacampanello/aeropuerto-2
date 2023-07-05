import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListavuelosPage } from './listavuelos.page';

const routes: Routes = [
  {
    path: '',
    component: ListavuelosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListavuelosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'listavuelos',
    loadChildren: () => import('./listavuelos/listavuelos.module').then( m => m.ListavuelosPageModule)
  },
  {
    path: 'detallesvuelos',
    loadChildren: () => import('./detallesvuelos/detallesvuelos.module').then( m => m.DetallesvuelosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

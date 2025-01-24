import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McuComponent } from './mcu/mcu.component';
import { DcComponent } from './dc/dc.component';

const routes: Routes = [
  { path: 'mcu', component: McuComponent},
  { path: 'dc', component:DcComponent},
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: '', redirectTo: '/mcu', pathMatch: 'full' },
  { path: '**', redirectTo: '/mcu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

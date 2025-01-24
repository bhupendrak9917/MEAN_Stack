import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DcComponent } from './dc.component';

const routes: Routes = [
  { path: '', component: DcComponent }
];

@NgModule({
  declarations: [DcComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DcModule { }

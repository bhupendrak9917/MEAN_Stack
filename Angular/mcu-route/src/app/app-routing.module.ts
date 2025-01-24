import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpcomingfilmsComponent } from './upcomingfilms/upcomingfilms.component';
import { CastComponent } from './cast/cast.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'upcomingfilms', component: UpcomingfilmsComponent },
  { path: 'cast', component: CastComponent },
  { path: 'cast/:sno', component: CastComponent, children: [{ path: ':sno', component: CastComponent },]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

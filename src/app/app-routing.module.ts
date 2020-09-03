import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddStateComponent } from './components/state/add-state/add-state.component';
import { ListStateComponent } from './components/state/list-state/list-state.component';
import { EditStateComponent } from './components/state/edit-state/edit-state.component';
import { AddCityComponent } from './components/city/add-city/add-city.component';
import { ListCityComponent } from './components/city/list-city/list-city.component';
import { EditCityComponent } from './components/city/edit-city/edit-city.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-state', component: AddStateComponent },
  { path: 'list-state', component: ListStateComponent },
  { path: 'edit-state', component: EditStateComponent },
  { path: 'add-city', component: AddCityComponent },
  { path: 'list-city', component: ListCityComponent },
  { path: 'edit-city', component: EditCityComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

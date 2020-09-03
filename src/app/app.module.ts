import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListStateComponent } from './components/state/list-state/list-state.component';
import { AddStateComponent } from './components/state/add-state/add-state.component';
import { EditStateComponent } from './components/state/edit-state/edit-state.component';
import { EditCityComponent } from './components/city/edit-city/edit-city.component';
import { ListCityComponent } from './components/city/list-city/list-city.component';
import { AddCityComponent } from './components/city/add-city/add-city.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Interceptor } from './middleware/interceptor';
import { CityService } from './service/city.service';
import { StateService } from './service/state.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListStateComponent,
    AddStateComponent,
    EditStateComponent,
    EditCityComponent,
    ListCityComponent,
    AddCityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    StateService,
    CityService,

    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

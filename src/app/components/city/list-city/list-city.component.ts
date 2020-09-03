import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../../../model/city.model';
import { CityService } from '../../../service/city.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.scss'],
})
export class ListCityComponent implements OnInit {
  cities: City[];

  constructor(private router: Router, private cityService: CityService) {}

  ngOnInit() {
    this.cityService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }

  deleteCity(city: City): void {
    this.cityService.deleteCity(city._id).subscribe((data) => {
      this.cities = this.cities.filter((u) => u !== city);
    });
  }

  editCity(city: City): void {
    window.localStorage.removeItem('editCityId');
    window.localStorage.setItem('editCityId', city._id);
    this.router.navigate(['edit-city']);
  }

  addCity(): void {
    this.router.navigate(['add-city']);
  }
}

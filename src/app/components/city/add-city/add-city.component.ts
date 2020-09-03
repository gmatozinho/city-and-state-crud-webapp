import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from '../../../service/city.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss'],
})
export class AddCityComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cityService: CityService
  ) {}

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      stateId: ['', Validators.required],
    });
  }

  onSubmit() {
    this.cityService.createCity(this.addForm.value).subscribe((data) => {
      this.router.navigate(['list-city']);
    });
  }
}
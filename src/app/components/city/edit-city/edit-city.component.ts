import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { City } from '../../../model/city.model';
import { CityService } from '../../../service/city.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss'],
})
export class EditCityComponent implements OnInit {
  city: City;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cityService: CityService
  ) {}
  

  ngOnInit() {
    const cityId = window.localStorage.getItem('editCityId');
    if (!cityId) {
      alert('Invalid action.');
      this.router.navigate(['list-city']);
      return;
    }
    this.editForm = this.formBuilder.group({
      _id: [''],
      name: ['', Validators.required],
      stateId: ['', Validators.required],
      createdAt: ['', Validators.required],
      updatedAt: ['', Validators.required],
    });
    this.cityService.getCityById(cityId).subscribe((data) => {
      delete data['__v'];
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    const cityId = this.editForm.value['_id'];
    delete this.editForm.value['_id'];
    delete this.editForm.value['createdAt'];
    delete this.editForm.value['updatedAt'];

    this.cityService
      .updateCity(this.editForm.value,cityId)
      .pipe(first())
      .subscribe(
        (data) => {
          if (data) {
            alert('City updated successfully.');
            this.router.navigate(['list-city']);
          } else {
            alert('City update error.');
          }
        },
        (error) => {
          alert(error.message);
        }
      );
  }
}

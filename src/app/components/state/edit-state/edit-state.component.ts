import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { State } from '../../../model/state.model';
import { StateService } from '../../../service/state.service';

@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html',
  styleUrls: ['./edit-state.component.scss'],
})
export class EditStateComponent implements OnInit {
  state: State;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private stateService: StateService
  ) {}

  ngOnInit() {
    let stateId = window.localStorage.getItem('editStateId');
    if (!stateId) {
      alert('Invalid action.');
      this.router.navigate(['list-state']);
      return;
    }
    this.editForm = this.formBuilder.group({
      _id: [''],
      name: ['', Validators.required],
      abbreviation: ['', Validators.required],
      createdAt: ['', Validators.required],
      updatedAt: ['', Validators.required],
    });
    this.stateService.getStateById(stateId).subscribe((data) => {
      delete data['__v']
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.stateService
      .updateState(this.editForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          if (data) {
            alert('State updated successfully.');
            this.router.navigate(['list-state']);
          } else {
            alert('State update error.');
          }
        },
        (error) => {
          alert(error);
        }
      );
  }
}

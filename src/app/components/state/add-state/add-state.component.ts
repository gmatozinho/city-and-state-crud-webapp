import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../../../service/state.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss'],
})
export class AddStateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private stateService: StateService
  ) {}

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      abbreviation: ['', Validators.required],
    });
  }

  onSubmit() {
    this.stateService.createState(this.addForm.value).subscribe((data) => {
      this.router.navigate(['list-state']);
    });
  }
}

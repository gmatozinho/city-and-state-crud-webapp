import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '../../../model/state.model';
import { StateService } from '../../../service/state.service';

@Component({
  selector: 'app-list-state',
  templateUrl: './list-state.component.html',
  styleUrls: ['./list-state.component.scss'],
})
export class ListStateComponent implements OnInit {
  states: State[];

  constructor(private router: Router, private stateService: StateService) {}

  ngOnInit() {
    this.stateService.getStates().subscribe((data) => {
      this.states = data;
    });
  }

  deleteState(state: State): void {
    this.stateService.deleteState(state._id).subscribe((data) => {
      this.states = this.states.filter((u) => u !== state);
    });
  }

  editState(state: State): void {
    window.localStorage.removeItem('editStateId');
    window.localStorage.setItem('editStateId', state._id);
    this.router.navigate(['edit-state']);
  }

  addState(): void {
    this.router.navigate(['add-state']);
  }
}

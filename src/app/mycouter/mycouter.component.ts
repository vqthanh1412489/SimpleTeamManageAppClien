import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../counter.actions';
import { AppState } from '../types';
@Component({
  selector: 'app-mycouter',
  templateUrl: './mycouter.component.html',
  styleUrls: ['./mycouter.component.css']
})
export class MycouterComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.count$ = this.store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}

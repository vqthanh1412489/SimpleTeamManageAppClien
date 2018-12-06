import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, UserInfor } from '../types';

@Component({
  selector: 'app-list-user-infor',
  templateUrl: './list-user-infor.component.html',
  styleUrls: ['./list-user-infor.component.css']
})
export class ListUserInforComponent implements OnInit {
  userInfors$: Observable<UserInfor[]>;
  constructor(
    private store: Store<AppState>,

  ) { }

  ngOnInit() {
    this.userInfors$ = this.store.pipe(select('userInfor'));
  }

}

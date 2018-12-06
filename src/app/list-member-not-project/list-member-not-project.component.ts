import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, UserInfor } from '../types';
import { WordServiceService } from '../word-service.service';

@Component({
  selector: 'app-list-member-not-project',
  templateUrl: './list-member-not-project.component.html',
  styleUrls: ['./list-member-not-project.component.css']
})
export class ListMemberNotProjectComponent implements OnInit {
  notUsers$: Observable<UserInfor[]>;
  // idProject$: Observable<String>;

  constructor(
    private store: Store<AppState>,
    private wordService: WordServiceService,

  ) { }

  ngOnInit() {
    // this.idProject$ = this.store.pipe(select('idProject'));

    this.notUsers$ = this.store.pipe(select('userNotProject'));
    // this.idProject$.subscribe(idProject => {
    //   this.wordService.getUserNotProject(idProject);
    // });
  }
}

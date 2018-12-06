import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Word, AppState } from '../types';
import { WordServiceService } from '../word-service.service';
@Component({
  selector: 'app-mamage-project',
  templateUrl: './mamage-project.component.html',
  styleUrls: ['./mamage-project.component.css']
})
export class MamageProjectComponent implements OnInit {
  // idProject$: Observable<String>;

  constructor(
    private store: Store<AppState>,
    private wordService: WordServiceService,
  ) { }
  ngOnInit() {
    // this.idProject$ = this.store.select('idProject');
    // this.idProject$.subs               cribe(idProject => {
      let idProject = localStorage.getItem('idPro');
      console.log(idProject)
      // let idProject = this.wordService.idPro;
      this.wordService.getUsersFromIdProject(idProject);
      console.log('123332123');
      this.wordService.getUserNotProject(idProject);
    // });
  }

}

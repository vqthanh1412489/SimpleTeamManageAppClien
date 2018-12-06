import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../types';
import { WordServiceService } from '../word-service.service';

@Component({
  selector: 'app-user-not-project',
  templateUrl: './user-not-project.component.html',
  styleUrls: ['./user-not-project.component.css']
})
export class UserNotProjectComponent implements OnInit {
  @Input() userInfor;
  idProject$: Observable<String>;

  constructor(
    private wordService: WordServiceService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
  }

  addMember(){
    const idPro = localStorage.getItem('idPro');
    if (idPro){
      this.wordService.idPro = idPro;
    }
    // this.store.pipe(select('idProject')).subscribe(idProject => {
      this.wordService.addUserToProject(this.userInfor._id, this.wordService.idPro);
    // });
  }

}

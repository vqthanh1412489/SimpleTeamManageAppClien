import { Component, OnInit, Input } from '@angular/core';
import { WordServiceService } from '../word-service.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../types';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {
  @Input() userInfor;
  idProject$: Observable<String>;
  constructor(
    private wordService: WordServiceService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
  }

  deleteMember() {
    const idPro = localStorage.getItem('idPro');
    if (idPro){
      this.wordService.idPro = idPro;
    }
    // this.store.pipe(select('idProject')).subscribe(idProject => {
      this.wordService.removeUserFromProject(this.userInfor._id, this.wordService.idPro);

    // });
  }
}

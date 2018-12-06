import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState, SETPROJECT } from '../types';
import { WordServiceService } from '../word-service.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() word;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private wordService: WordServiceService,
  ) { }

  ngOnInit() {
  }

  showDetail() {
    this.wordService.showDetailProject(this.word._id);
  }

  addUserToProject() {
    // this.store.dispatch({ type: SETPROJECT, payload: { idProject: this.word._id } });
    this.wordService.idPro = this.word._id;
    localStorage.setItem('idPro', this.word._id);
    this.router.navigate(['/manageProject']);
  }

}

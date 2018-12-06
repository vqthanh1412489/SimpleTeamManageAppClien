import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Word, AppState } from '../types';
import { WordServiceService } from '../word-service.service';
@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css']
})
export class ListWordComponent implements OnInit {
  word$: Observable<Word[]>;

  constructor(
    private store: Store<AppState>,
    private wordService: WordServiceService,
  ) { }

  ngOnInit() {
    this.word$ = this.store.pipe(select('word'));
    // this.idProject$ = this.store.pipe(select('idProject'));
    this.wordService.getAllWord();
    
  }
}

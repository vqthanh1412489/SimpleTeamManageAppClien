import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, ADDWORD, Word } from '../types';
import { WordServiceService } from '../word-service.service';

@Component({
  selector: 'app-form-word',
  templateUrl: './form-word.component.html',
  styleUrls: ['./form-word.component.css']
})
export class FormWordComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private wordService: WordServiceService,
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      des: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(){
    const { name, des } = this.myForm.value;
    const word: Word = { name, des };
    this.wordService.addWord(word);
    this.myForm.reset();
  }

}

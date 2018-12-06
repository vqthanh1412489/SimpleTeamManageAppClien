import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../types';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  formAddUser: FormGroup;
  isSucess = false;
  isError = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.formAddUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  onSubmit(){
    const { email, password, name } = this.formAddUser.value;
    const user: User = { email, password, name };
    this.userService.signUp(user)
    .then(() => {
      this.isSucess = true;
      setTimeout(() => this.isSucess = false, 2000);
    })
    .catch(() => {
      this.isError = true;
      setTimeout(() => this.isError = false, 2000);
    })
    ;
    this.formAddUser.reset();
  }

}

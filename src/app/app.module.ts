import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycouterComponent } from './mycouter/mycouter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { wordReducer } from './word.reducer';
import { WordComponent } from './word/word.component';
import { FormWordComponent } from './form-word/form-word.component';
import { ListWordComponent } from './list-word/list-word.component';
import { WordServiceService } from './word-service.service';
import { FormUserComponent } from './form-user/form-user.component';
import { UserService } from './user.service';
import { AddMemberToProjectComponent } from './add-member-to-project/add-member-to-project.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { projectReducer } from './project.reducer';
import { UserInforComponent } from './user-infor/user-infor.component';
import { ListUserInforComponent } from './list-user-infor/list-user-infor.component';
import { userReducer } from './user.reducer';
import { userNotProjectReducer } from './userNotPorject.reducer';
import { ListMemberNotProjectComponent } from './list-member-not-project/list-member-not-project.component';
import { UserNotProjectComponent } from './user-not-project/user-not-project.component';
import { MamageProjectComponent } from './mamage-project/mamage-project.component';
import { HomeComponent } from './home/home.component';

const routerConfig: Routes = [
  { path: '', component: HomeComponent},
  { path: 'createMember', component: FormUserComponent},
  { path: 'createProject', component: FormWordComponent},
  { path: 'listProjects', component: ListWordComponent},
  { path: 'manageProject', component: MamageProjectComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    MycouterComponent,
    WordComponent,
    FormWordComponent,
    ListWordComponent,
    FormUserComponent,
    AddMemberToProjectComponent,
    NavBarComponent,
    UserInforComponent,
    ListUserInforComponent,
    ListMemberNotProjectComponent,
    UserNotProjectComponent,
    MamageProjectComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ 
      count: counterReducer, 
      word: wordReducer, 
      idProject: projectReducer, 
      userInfor: userReducer,
      userNotProject: userNotProjectReducer
     }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
    
  ],
  providers: [WordServiceService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

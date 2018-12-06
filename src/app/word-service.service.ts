import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState, SETWORD, Word, ADDWORD, SETUSERINFOR, DELUSERINFOR, SETUSERNOTPORJECT, DELUSERNOTPORJECT, ADDUSERNOTPORJECT, ADDUSERINFOR } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const url = 'https://testpv3009.herokuapp.com';

@Injectable({
  providedIn: 'root'
})

export class WordServiceService {
  idPro: string;
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
  ) { }

  getAllWord(){
    return this.http.get<any>(`${url}/project`)
    .subscribe(res => {
      if (!res.success) return alert('Fail');
      this.store.dispatch({ type: SETWORD, payload: { words: res.projects } });
    });
  }

  addWord(word: Word){
    return this.http.post<any>(`${url}/project`, word, httpOptions)
    .subscribe(res => {
      if (!res.success) return alert('The project name already exists');
      this.store.dispatch({ type: ADDWORD, payload: { word } });
      alert('Create Project Success');
    });
  }

  showDetailProject(_id){
    return this.http.get<any>(`${url}/project/${_id}`)
    .subscribe(res => {
      if (!res.success) return;
      alert(`Project Name: ${res.project.name} \nProject Description: ${res.project.des}`);
    });
  }

  getUsersFromIdProject(_id){
    const body = { idProject: _id };
    return this.http.post<any>(`${url}/project/getIdNameUsers`, body , httpOptions)
    .subscribe(res => {
      if (!res.success) return;
      console.log('Co: ',res);                                                                          
      this.store.dispatch({ type: SETUSERINFOR, payload: { UserInfors: res.arrUsers } })
    });
  }
  getUserNotProject(_id){
    const body = { idProject: _id };
    return this.http.post<any>(`${url}/project/getUserNotProject`, body , httpOptions)
    .subscribe(res => {
      console.log('Khong co', res);
      if (!res.success) return;                                                                 
      this.store.dispatch({ type: SETUSERNOTPORJECT, payload: { users: res.arrUsers } })
    });
  }

  removeUserFromProject(idUser, idProject){
    const body = { idProject, idUser };
    return this.http.put<any>(`${url}/project/deleteUserFromProject`, body, httpOptions)
    .subscribe(res => {
      if (!res.success) return alert('Fail');
      this.store.dispatch({ type: DELUSERINFOR, payload: { _id: res.data._id } });
      this.store.dispatch({ type: ADDUSERNOTPORJECT, payload: { user: res.data } });
      
    });                                                                                             
  }

  addUserToProject(idUser, idProject){
    const body = { idProject, idUser };
    return this.http.put<any>(`${url}/project/addUserToProject`, body, httpOptions)
    .subscribe(res => {
      if (!res.success) return;
      this.store.dispatch({ type: DELUSERNOTPORJECT, payload: { _id: res.data._id } });
      this.store.dispatch({ type: ADDUSERINFOR, payload: { user: res.data } });
    });
  }
}

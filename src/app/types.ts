export interface AppState {
    count: number;
    word: Word[];
    idProject: string;
    userInfor: UserInfor;
    userNotProject: UserInfor;
}

export interface Word {
    _id?: string;
    name: string;
    des: string;
    users?: string[];
}

export interface User {
    _id?: string;
    email: string;
    password?: string;
    name: string;
    projects?: string[];
}

export interface UserInfor {
    _id?: string;
    name: string;
}

export interface Action {
    type: string;
    payload: any;
}

export const SETWORD = 'SETWORD';
export const ADDWORD = 'ADDWORD';
export const DELWORD = 'DELWORD';

export const SETPROJECT = '';

export const SETUSERINFOR = 'SETUSERINFOR';
export const DELUSERINFOR = 'DELUSERINFOR';
export const ADDUSERINFOR = 'ADDUSERINFOR';

export const SETUSERNOTPORJECT = 'SETUSERNOTPORJECT';
export const DELUSERNOTPORJECT = 'DELUSERNOTPORJECT';
export const ADDUSERNOTPORJECT = 'ADDUSERNOTPORJECT';



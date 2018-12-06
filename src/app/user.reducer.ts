import { Word, Action, UserInfor, SETUSERINFOR, DELUSERINFOR, ADDUSERINFOR } from './types';

export const initialState: UserInfor[] = [
];

export function userReducer(state = initialState, action: Action){
    switch (action.type) {
        case SETUSERINFOR:
            return action.payload.UserInfors;
        case DELUSERINFOR:
            return state.filter(user => user._id !== action.payload._id);
        case ADDUSERINFOR:
            return [action.payload.user, ...state];
        default:
            return state;
    }
}
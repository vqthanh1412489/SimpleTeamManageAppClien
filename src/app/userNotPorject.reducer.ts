import { Word, Action, UserInfor, SETUSERNOTPORJECT, DELUSERNOTPORJECT, ADDUSERNOTPORJECT } from './types';

export const initialState: UserInfor[] = [
];

export function userNotProjectReducer(state = initialState, action: Action){
    switch (action.type) {
        case SETUSERNOTPORJECT:
            return action.payload.users;
        case DELUSERNOTPORJECT:
            return state.filter(user => user._id !== action.payload._id);
        case ADDUSERNOTPORJECT:
            return [action.payload.user, ...state];
        default:
            return state;
    }
}
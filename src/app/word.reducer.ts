import { Word, Action, SETWORD, ADDWORD, DELWORD } from './types';

export const initialState: Word[] = [
];

export function wordReducer(state = initialState, action: Action){
    switch (action.type) {
        case SETWORD:
            return action.payload.words;

        case ADDWORD:
            return [action.payload.word, ...state];
        default:
            return state;
    }
}
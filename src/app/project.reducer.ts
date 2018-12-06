import { Action, SETPROJECT } from './types';

export const initialState: string = '';

export function projectReducer(state = initialState, action: Action){
    switch (action.type) {
        case SETPROJECT:
            return action.payload.idProject;
        default:
            return state;
    }
}
import * as types from './constants';

const initialState = {
    token:  null,
    isAuthenticated: false,
    username: null
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case types.ADD:
            if (!action.token)
            return {
                ...state,
                isAuthenticated: true,
                token: null,
                username: null
            };

            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                username: action.username,
                accessLevel: action.accessLevel
            };
            case types.REMOVE:
                return { ...state, isAuthenticated: false, token: null, username: null };
            case types.VERIFY:
                default:
                    return {...state };
    }
}
import { LOADING, LOGIN, USER_DATA } from "./action";

const initialState = {
    token: null,
    login_time: null,
    expired_token: null,
    userData: {},
    isLoading: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            const { token, login_time, expired_token } = action.payload;
            return {
                ...state,
                token, login_time, expired_token
            };
        }
        case LOADING: {
            return {
                ...state,
                ...{ isLoading: action.payload },
            };
        }
        case USER_DATA: {
            return {
                ...state,
                userData: action.payload
            };
        }
        default:
            return state;
    }
}

export default userReducer;
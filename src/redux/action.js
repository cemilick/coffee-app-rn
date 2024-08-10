export const LOGIN = "LOGIN";
export const LOADING = "LOADING";
export const USER_DATA = "USER_DATA";

export const saveCredentials = payload => ({
    type: LOGIN,
    payload: {
        token: payload.token,
        login_time: payload.login_time,
        expired_token: payload.expired_token
    }
});

export const setLoading = payload => ({
    type: LOADING,
    payload
});

export const setUserData = payload => ({
    type: USER_DATA,
    payload
});
export const LOGIN_USER  = "LOGIN_USER"

 export function login(user,dispatch) {
    dispatch({type: LOGIN_USER, payload:user});
}
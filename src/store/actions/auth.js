import axios from "axios";
import * as actionsTypes from "./actionsTypes";

export const authStart = () => {
  return {
    type: actionsTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionsTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authfail = error => {
  return {
    type: actionsTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjacOkx1IUlxX_gwAyhqJ55qQfoz-gv1o";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjacOkx1IUlxX_gwAyhqJ55qQfoz-gv1o";
    }
    axios
      .post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(authfail(err));
      });
  };
};

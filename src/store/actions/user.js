import { GET_USER, UNAUTHORIZED, LOGOUT } from "./types";
import axios from "axios";

export const getUser = token => async dispatch => {
  try {
    const res = await axios("https://sever-ok--cuonhbui.repl.co/api/profile", {
      headers: {
        jwt: token
      }
    });
    console.log(res.data);
    console.log({ ...res.data, token: token });
    dispatch({
      type: GET_USER,
      payload: { ...res.data, token: token }
    });
  } catch (err) {
    console.log("err " + err.message);
    dispatch(unauth());
  }
};

export const unauth = () => ({
  type: UNAUTHORIZED
});

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  dispatch({
    type: LOGOUT
  });
};

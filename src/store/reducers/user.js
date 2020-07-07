import { GET_USER, UNAUTHORIZED, LOGOUT } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UNAUTHORIZED:
      return {};
    case LOGOUT:
      return {};

    default:
      return state;
  }
};

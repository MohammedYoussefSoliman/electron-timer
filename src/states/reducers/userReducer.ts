import {
  UserState,
  UserActionTypes,
  set_user,
  set_login,
} from "../types/types";

const initialState: UserState = {
  token: undefined,
  id: undefined,
  first_name: undefined,
  middle_name: undefined,
  last_name: undefined,
  email: undefined,
  role: undefined,
  avatar: undefined,
};

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case set_login:
      return {
        ...state,
        ...action.payload,
      };

    case set_user:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

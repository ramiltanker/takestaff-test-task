import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
} from "../actions/auth";

// Types
import { TUser } from "../types/auth";
// Types

// Union тип
import { TAuthActions } from "../actions/auth";
// Union тип

type TAuthReducer = {
  isLogged: boolean;
  isLoading: boolean;
  user?: TUser;
  signInRequest: boolean;
  signInSuccess: boolean;
  signInFailed: boolean;
};

export const initialState: TAuthReducer = {
  isLogged: false,
  isLoading: false,
  user: undefined,
  signInRequest: false,
  signInSuccess: false,
  signInFailed: false,
};

export const authReducer = (state = initialState, action: TAuthActions) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case USER_SIGNIN_REQUEST: {
      return {
        ...state,
        isLogged: false,
        isLoading: true,
        signInRequest: true,
        signInSuccess: false,
        signInFailed: false,
      };
    }

    case USER_SIGNIN_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        user: action.user,
        signInRequest: false,
        signInSuccess: true,
        signInFailed: false,
      };
    }

    case USER_SIGNIN_FAILED: {
      return {
        ...state,
        isLogged: false,
        isLoading: false,
        signInRequest: false,
        signInSuccess: false,
        signInFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};

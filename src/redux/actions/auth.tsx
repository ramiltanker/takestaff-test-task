import { AppThunk } from "../types";
import { TUser } from "../types/auth";
import axios from "../../utils/axios";

export const USER_SIGNIN_REQUEST: "USER_SIGNIN_REQUEST" = "USER_SIGNIN_REQUEST";
export const USER_SIGNIN_SUCCESS: "USER_SIGNIN_SUCCESS" = "USER_SIGNIN_SUCCESS";
export const USER_SIGNIN_FAILED: "USER_SIGNIN_FAILED" = "USER_SIGNIN_FAILED";

interface IUserSignInRequest {
  readonly type: typeof USER_SIGNIN_REQUEST;
}

interface IUserSignInSuccess {
  readonly type: typeof USER_SIGNIN_SUCCESS;
  user: TUser;
}

interface IUserSignInFailed {
  readonly type: typeof USER_SIGNIN_FAILED;
}

export type TAuthActions =
  | IUserSignInRequest
  | IUserSignInSuccess
  | IUserSignInFailed;

export const handleSignIn: AppThunk = (email, password) => {
  return async (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    });
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      if (response.status === 200) {
        dispatch({ type: USER_SIGNIN_SUCCESS, user: response.data });
      }
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAILED });
    }
  };
};

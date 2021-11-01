import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from "react-redux";
import { RootState, AppThunk, AppDispatch } from "./types";

// Теперь этот хук «знает» структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
// Хук не даст отправить экшен, который ему не знаком
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();

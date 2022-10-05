import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";

import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export { rootReducer, useTypedSelector };

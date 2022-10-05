import axios from "axios";
import { Dispatch } from "redux";

import { User, UserAction, UserActionTypes } from "store/reducers/types";

const fetchUsers = async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const result = await axios.get<User[]>("/user");
    setTimeout(() => {
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: result.data,
      });
      const lastVisitPosition = localStorage.getItem("scrollPosition");
    if (lastVisitPosition) {
      setTimeout(() => {
        window.scrollTo({ top: JSON.parse(lastVisitPosition), behavior: 'smooth' });
      },400);
    };
    }, 1000);
  } catch (err) {
    dispatch({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: "Something has gone wrong on loading...",
    });
  }
};

const fetchCreateUser = async (
  dispatch: Dispatch<UserAction>,
  userData: User
) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const result = await axios.post<string>("/user", userData);
    console.log(result.data);
    dispatch({
      type: UserActionTypes.FETCH_CREATE_USER_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    dispatch({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: "Something has gone wrong on create user...",
    });
  }
};

const fetchDeleteUser = async (dispatch: Dispatch<UserAction>, id: string) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const { data } = await axios.delete<User>(`/user/${id}`);
    if (data.id) {
      dispatch({
        type: UserActionTypes.FETCH_DELETE_USER_SUCCESS,
        payload: data.id,
      });
    } else {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Something has gone wrong on delete...",
      });
    }
  } catch (err: any) {
    dispatch({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: "Something has gone wrong on delete... ",
    });
  }
};
const fetchEditUser = async (
  dispatch: Dispatch<UserAction>,
  formData: User
): Promise<boolean> => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const { name, age, aboutPerson } = formData;
    const { data } = await axios.put<User>(`/user/${formData.id}`, {
      name,
      age,
      aboutPerson,
    });
    if (data.id) {
      dispatch({
        type: UserActionTypes.FETCH_EDIT_USER_SUCCESS,
        payload: data,
      });
      return true;
    } else {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Something has gone wrong on editing...",
      });
    }
  } catch (err: any) {
    dispatch({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: "Something has gone wrong on editing... ",
    });
    return false;
  }
  return true;
};

const errorModalClose = (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionTypes.ERROR_MODAL_CLOSE });
};

export {
  fetchUsers,
  fetchDeleteUser,
  errorModalClose,
  fetchCreateUser,
  fetchEditUser,
};

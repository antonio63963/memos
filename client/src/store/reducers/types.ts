type User = {
  name: string;
  age: number;
  id?: string;
  aboutPerson: string;
};

type UserState = {
  users: any[];
  isLoading: boolean;
  error: null | string;
  isModal: boolean;
};

enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",

  FETCH_CREATE_USER_SUCCESS = 'FETCH_CREATE_USER_SUCCESS',
  FETCH_DELETE_USER_SUCCESS = 'FETCH_DELETE_USER_SUCCESS',
  FETCH_EDIT_USER_SUCCESS = 'FETCH_EDIT_USER_SUCCESS',

  ERROR_MODAL_CLOSE = 'ERROR_MODAL_CLOSE',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',

  SORT_AGE_ZA = 'SORT_AGE_ZA',
  SORT_AGE_AZ = 'SORT_AGE_AZ',
  SORT_NAME_ZA = 'SORT_NAME_ZA',
  SORT_NAME_AZ = 'SORT_NAME_AZ',
}

type FetchUserAction = {
  type: UserActionTypes.FETCH_USERS;
};

type FetchUserSuccessAction = {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
};

type FetchUserErrorAction = {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
};

type ErrorModalClose = {
  type: UserActionTypes.ERROR_MODAL_CLOSE;
};
type OpenModal = {
  type: UserActionTypes.OPEN_MODAL;
};
type CloseModal = {
  type: UserActionTypes.CLOSE_MODAL;
};
type SortAgeZA = {
  type: UserActionTypes.SORT_AGE_ZA;
}
type SortAgeAZ = {
  type: UserActionTypes.SORT_AGE_AZ;
}
type SorNameZA = {
  type: UserActionTypes.SORT_NAME_ZA;
}
type SorNameAZ = {
  type: UserActionTypes.SORT_NAME_AZ;
}

// CREATE
type FetchCreateUserSuccessAction = {
  type: UserActionTypes.FETCH_CREATE_USER_SUCCESS;
  payload: string;
};
// DELETE
type FetchDeleteUserSuccessAction = {
  type: UserActionTypes.FETCH_DELETE_USER_SUCCESS;
  payload: string;
};
//EDIT
type FetchEditUserSuccessAction = {
  type: UserActionTypes.FETCH_EDIT_USER_SUCCESS;
  payload: User;
}


type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction
  | FetchCreateUserSuccessAction
  | ErrorModalClose
  | OpenModal
  | CloseModal
  | FetchDeleteUserSuccessAction
  | FetchEditUserSuccessAction
  | SortAgeZA
  | SortAgeAZ
  | SorNameZA
  | SorNameAZ;


export type { User, UserState, UserAction };

export { UserActionTypes };

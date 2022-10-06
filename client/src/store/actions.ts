import { Dispatch } from 'redux';

import { UserActionTypes } from 'store/reducers/types';

const openModal = (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.OPEN_MODAL});
};
const closeModal = (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.OPEN_MODAL});
};

const sortAgeZA = (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.SORT_AGE_ZA});
}
const sortAgeAZ = (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.SORT_AGE_AZ});
}
const sortNameZA = (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.SORT_NAME_ZA});
}
const sortNameAZ = (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.SORT_NAME_AZ});
}

export {
  openModal,
  closeModal,
  sortAgeZA,
  sortAgeAZ,
  sortNameAZ,
  sortNameZA,
};

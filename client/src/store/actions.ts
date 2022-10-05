import { Dispatch } from 'redux';

import { UserActionTypes } from 'store/reducers/types';

const openModal = (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.OPEN_MODAL});
};
const closeModal = (dispatch: Dispatch) => {
  dispatch({type: UserActionTypes.OPEN_MODAL});
};

export {
  openModal,
  closeModal,
};

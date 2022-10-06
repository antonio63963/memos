import update from "immutability-helper";
import { UserState, UserAction, UserActionTypes } from "./types";

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
  isModal: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return update(state, { isLoading: { $set: true } });
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return update(state, {
        isLoading: { $set: false },
        users: { $set: action.payload },
      });
    case UserActionTypes.FETCH_USERS_ERROR:
      return update(state, {
        isLoading: { $set: false },
        error: { $set: action.payload },
      });
    case UserActionTypes.ERROR_MODAL_CLOSE:
      return update(state, {
        isLoading: { $set: false },
        error: { $set: null },
      });
    // CREATE
    case UserActionTypes.FETCH_CREATE_USER_SUCCESS:
      return update(state, {
        users: { $push: [action.payload] },
        isLoading: { $set: false },
        error: { $set: null },
        isModal: { $set: false },
      });
    // DELETE
    case UserActionTypes.FETCH_DELETE_USER_SUCCESS:
      const ind = state.users.findIndex((user) => user.id === action.payload);
      return update(state, {
        users: { $splice: [[ind, 1]] },
        isLoading: { $set: false },
        error: { $set: null },
      });

    //EDIT
    case UserActionTypes.FETCH_EDIT_USER_SUCCESS: {
      const ind = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      return update(state, {
        users: {
          [ind]: {
            name: { $set: action.payload.name },
            age: { $set: action.payload.age },
            aboutPerson: { $set: action.payload.aboutPerson },
          },
        },
        isLoading: { $set: false },
        error: { $set: null },
      });
    }
    // SORT
    case UserActionTypes.SORT_AGE_ZA: {
      return {
        users: state.users.sort((a, b) => b.age - a.age),
        isLoading: false,
        error: null,
        isModal: false,
      };
    }
    case UserActionTypes.SORT_AGE_AZ: {
      return {
        users: state.users.sort((a, b) => a.age - b.age),
        isLoading: false,
        error: null,
        isModal: false,
      };
    }
    case UserActionTypes.SORT_NAME_AZ: {
      return {
        users: state.users.sort((a, b) => (a.name > b.name ? 1 : -1)),
        isLoading: false,
        error: null,
        isModal: false,
      };
    }
    case UserActionTypes.SORT_NAME_ZA: {
      return {
        users: state.users.sort((a, b) => (a.name < b.name ? 1 : -1)),
        isLoading: false,
        error: null,
        isModal: false,
      };
    }
    default:
      return state;
  }
};

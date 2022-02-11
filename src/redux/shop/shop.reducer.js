import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from "./shop.types";
const INITIAL_STATE = {
  collections: null,
  isFetched: false,
  errMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetched: true };
    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetched: false, collections: action.payload };
    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetched: false, errMessage: action.payload };
    default:
      return state;
  }
};

export default shopReducer;

import { GET_LIST_OF_PARTNERS } from "../constants/actions";

const initialState = {
  listOfPartners: []
};

export function partnersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_OF_PARTNERS:
      return { ...state, listOfPartners: action.listOfPartners };
    default:
      return state
  }
}

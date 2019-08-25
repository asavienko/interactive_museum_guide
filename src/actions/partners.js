import { GET_LIST_OF_PARTNERS } from "../constants/actions";

export const setListOfPartners = listOfPartners => ({
  type: GET_LIST_OF_PARTNERS,
  listOfPartners
});

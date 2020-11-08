import { UPDATE_BUSINESS_CARD_FORM } from '../actions/actionTypes';

const businessCardFormData = (state = null, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_CARD_FORM:
      return action.payload;
    default:
      return state;
  }
}

export default businessCardFormData;
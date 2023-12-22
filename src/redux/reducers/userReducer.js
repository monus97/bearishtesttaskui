import {
  ERROR,
  SWITCH_DRAWER_MODE,
  SWITCH_DRAWER_NARROW_MODE,
} from "../action_Types";

const initialState = {
 data:false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case SWITCH_DRAWER_NARROW_MODE:
      return {
        ...state,
        data: true,
        error: false,
     
      };
    case SWITCH_DRAWER_MODE:
      return {
        ...state,
        data: false,
        error: false,
      };



    case ERROR:
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

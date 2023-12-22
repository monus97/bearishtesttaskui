import {
  SWITCH_DRAWER_MODE,
  SWITCH_DRAWER_NARROW_MODE,
} from "../action_Types";

export const switchDrawerNarrowMode  = () => {
  return {
    type: SWITCH_DRAWER_NARROW_MODE,
  };
};

export const switchDrawerMode  = () => {
  return {
    type: SWITCH_DRAWER_MODE,
  };
};

import {SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from "constants/ActionTypes";
import {
  LAYOUT_TYPE,
  NAV_STYLE,
  THEME_COLOR,
  THEME_TYPE,
} from "constants/ThemeSetting";

export default function reducer(state, { type, payload } = {}) {
    switch (type) {
        case '@@router/LOCATION_CHANGE':
          return {
            ...state,
            pathname: payload.location.pathname,
            navCollapsed: false
          };
        case TOGGLE_COLLAPSED_NAV:
          return {
            ...state,
            navCollapsed: payload
          };
        case WINDOW_WIDTH:
          return {
            ...state,
            width: payload,
          };
        case THEME_TYPE:
          return {
            ...state,
            themeType: payload
          };
        case THEME_COLOR:
          return {
            ...state,
            themeColor: payload
          };
    
        case NAV_STYLE:
          return {
            ...state,
            navStyle: payload
          };
        case LAYOUT_TYPE:
          return {
            ...state,
            layoutType: payload
          };
    
        case SWITCH_LANGUAGE:
          return {
            ...state,
            locale: payload,
    
          };
        default:
          return state;
      }
}



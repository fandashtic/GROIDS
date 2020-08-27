import {SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from "constants/ActionTypes";
import {
  LAYOUT_TYPE,
  NAV_STYLE,
  THEME_COLOR,
  THEME_TYPE,
} from "constants/ThemeSetting";
import { UserType } from 'api/Shared/Constant/Enum'
import { IsHasValue } from 'api/Shared/Util';

import {LOGIN_USER} from './actions/auth'

const GetRoutePath = (authUser) => {
  if (IsHasValue(authUser) && IsHasValue(authUser.UserType)) {
    switch (authUser.UserType) {
      case UserType.SUPER_ADMIN:
        return '/company/dashboard';
      case UserType.COMPANY_ADMIN:
        return '/company/dashboard';
      case UserType.STORE_ADMIN:
        return '/store/dashboard';
      case UserType.STORE_STAFF:
        return '/store/dashboard';
      case UserType.CONSUMER:
        return '/consumer/dashboard';
      case UserType.SUPPORT:
        return '/consumer/dashboard';
      default:
        return '/company/dashboard';
    }
  }
  else {
    return '/';
  }
}

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
        case LOGIN_USER:
          localStorage.setItem("user", JSON.stringify(payload));
          return { ...state, isAuthUser: true, user: payload, pathName: GetRoutePath(payload)};
        default:
          return state;
      }
}



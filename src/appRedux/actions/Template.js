/* eslint-disable react-hooks/rules-of-hooks */
import {SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from "constants/ActionTypes";
import {LAYOUT_TYPE, NAV_STYLE, THEME_COLOR, THEME_TYPE} from "../../constants/ThemeSetting";

export function toggleCollapsedSideNav(navCollapsed,dispatch) {
  return {type: TOGGLE_COLLAPSED_NAV, navCollapsed};
}

 function updateWindowWidth(width,dispatch) {
  dispatch({type: WINDOW_WIDTH, payload:width});
}

export function setThemeType(themeType,dispatch) {
  dispatch({type: THEME_TYPE, payload : themeType});
}

export function setThemeColor(themeColor,dispatch) {
  dispatch({type: THEME_COLOR, payload : themeColor});
}

export function onNavStyleChange(navStyle,dispatch) {
  dispatch({type: NAV_STYLE, payload:navStyle});
 
}

export function onLayoutTypeChange(layoutType,dispatch) {
  dispatch({type: LAYOUT_TYPE, payload :layoutType});
}

export function switchLanguage(locale,dispatch) {
  dispatch({
    type: SWITCH_LANGUAGE,
    payload: locale
  });
}

export {updateWindowWidth}
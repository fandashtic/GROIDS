import { createContext } from "react";
import {
    LAYOUT_TYPE_FULL,
    NAV_STYLE_FIXED,
    THEME_COLOR,
    THEME_TYPE_SEMI_DARK
  } from "constants/ThemeSetting";
  
const Context = createContext({
    navCollapsed: true,
    navStyle: NAV_STYLE_FIXED,
    layoutType: LAYOUT_TYPE_FULL,
    themeType: THEME_TYPE_SEMI_DARK,
    themeColor: THEME_COLOR,
    pathname: '/',
    width: window.innerWidth,
    isDirectionRTL: false,
    locale: {
      languageId: 'english',
      locale: 'en',
      name: 'English',
      icon: 'us'
    }
});

export default Context;
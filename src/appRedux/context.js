import { createContext } from "react";
import {
    LAYOUT_TYPE_FULL,
    NAV_STYLE_FIXED,
    THEME_COLOR,
    THEME_TYPE_SEMI_DARK,
    THEME_TYPE_LITE,
    THEME_TYPE_DARK,
    NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
  } from "constants/ThemeSetting";
  
const Context = createContext({
    navCollapsed: true,
    navStyle: NAV_STYLE_FIXED,
    layoutType: LAYOUT_TYPE_FULL,
    themeType: THEME_TYPE_SEMI_DARK,
    themeColor: THEME_COLOR,
    pathName: '/',
    width: window.innerWidth,
    isDirectionRTL: false,
    locale: {
      languageId: 'english',
      locale: 'en',
      name: 'English',
      icon: 'us'
    },
    initURL:'/',
    user:{},
    isAuthUser:false
});

export default Context;
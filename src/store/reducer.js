export default function reducer(state, { type, payload }) {
    switch (type) {
        case "SIDE_NAV_BAR":
        return {
            ...state,
            isSideNavMenu: payload,
        };
        case "MENU_TOGGLE":
        return {
            ...state,
            isSideToggle: payload,
        };

        default:
      return state;
    }
}
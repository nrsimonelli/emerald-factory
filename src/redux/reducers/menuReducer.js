const menuReducer = (
  state = { mobile: false, profile: false },
  action
) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { ...state, mobile: true };

    case 'CLOSE_MENU':
      return { ...state, mobile: false };

    case 'OPEN_PROFILE':
      return { ...state, profile: true };

    case 'CLOSE_PROFILE':
      return { ...state, profile: false };

    default:
      return state;
  }
};

export default menuReducer;

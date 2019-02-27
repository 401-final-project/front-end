let initialState = {
  userInfo: {},
  socialSelect: {}, 
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch(type) {
    case 'UPDATE':{
      let newState = {
        ...state,
        userInfo: payload,
      };
      return newState;
    }
    case 'UPDATE_SHARE_SELCTOR':{
      let newState = {
        ...state,
        socialSelect: payload,
      };
      return newState;
    }
    default:
      return state;
  }
};
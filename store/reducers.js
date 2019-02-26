let initialState = {
  userInfo: null,
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
  }
};
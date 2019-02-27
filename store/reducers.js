let defaultUser = {  
  "name":"Fletcher",
  "phone":"3334446666",
  "email":"email@gmail.com",
  "linkedIn":"asdFletcher",
  "twitter":"asdFletch",
  "tiktok":"exampletiktoker",
  "snapchat":"snapper",
  "instagram":"inster",
  "facebook":"facebooker",
  "pinterest":"interesting"
};

let initialState = {
  userInfo: defaultUser,
  socialSelect: {}, 
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch(type) {
    case 'UPDATE_USER_INFO':{
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
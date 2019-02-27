let defaultUser = {  
  name: "Fletcher",
  phone: "3334446666",
  email: "email@gmail.com",
  linkedin: "asdFletcher",
  twitter: "asdFletch",
  tiktok: "exampletiktoker",
  snapchat: "snapper",
  instagram: "inster",
  facebook: "facebooker",
  pinterest: "interesting"
};

let initialState = {
  userInfo: defaultUser,
  socialSelect: {},
  contacts: [
    {  
      "name":"Fletcher1",
      "phone":"3334446666",
      "email":"email@gmail.com",
      "linkedIn":"asdFletcher",
      "twitter":"asdFletch",
      "tiktok":"exampletiktoker",
      "snapchat":"snapper",
      "instagram":"inster",
      "facebook":"facebooker",
      "pinterest":"interesting"
    },
    {  
      "name":"Fletcher2",
      "phone":"3334446666",
      "email":"email@gmail.com",
      "linkedIn":"asdFletcher",
      "twitter":"asdFletch",
      "tiktok":"exampletiktoker",
      "snapchat":"snapper",
      "instagram":"inster",
      "facebook":"facebooker",
      "pinterest":"interesting"
    },
    {  
      "name":"Fletcher3",
      "phone":"3334446666",
      "email":"email@gmail.com",
      "linkedIn":"asdFletcher",
      "twitter":"asdFletch",
      "tiktok":"exampletiktoker",
      "snapchat":"snapper",
      "instagram":"inster",
      "facebook":"facebooker",
      "pinterest":"interesting"
    }
  ],
  recentScan: {},
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
    case 'NEW_CONTACT_SCAN':{
      let newState = {
        ...state,
        recentScan: payload,
      };
      return newState;
    }
    default:
      return state;
  }
};
// import { AsyncStorage } from 'react-native';

let defaultUser = {
  name: 'Fletcher',
  phone: '3334446666',
  linkedin: 'asdFletcher',
  facebook: 'facebooker',
  pinterest: 'interesting',
};

let initialState = {
  userInfo: defaultUser,
  socialSelect: {
    name: true,
    phone: false,
    email: false,
    linkedin: false,
    pinterest: false,
    twitter: false,
    facebook: false,
    github: false,
    instagram: false,
    snapchat: false,
    ravelry: false,
  },
  contacts: [
    {
      'name':'Fletcher1',
      'phone':'3334446666',
      'email':'email@gmail.com',
      'linkedin':'asdFletcher',
      'pinterest':'asdFletch',
      'twitter':'exampletiktoker',
      'facebook':'snapper',
      'github':'inster',
      'instagram':'facebooker',
      'snapchat':'interesting',
    },
    {
      'name':'Fletcher2',
      'phone':'3334446666',
      'email':'email@gmail.com',
      'linkedin':'asdFletcher',
      'pinterest':'asdFletch',
      'twitter':'exampletiktoker',
      'facebook':'snapper',
      'github':'inster',
      'instagram':'facebooker',
      'snapchat':'interesting',
    },
    {
      'name':'Fletcher3',
      'phone':'3334446666',
      'email':'email@gmail.com',
      'linkedin':'asdFletcher',
      'pinterest':'asdFletch',
      'twitter':'exampletiktoker',
      'facebook':'snapper',
      'github':'inster',
      'instagram':'facebooker',
      'snapchat':'interesting',
    },
  ],
  recentScan: {},

};
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
 
  case 'UPDATE_USER_INFO': {
    let newState = {
      ...state,
      userInfo: payload,
    };
    return newState;
  }
  case 'UPDATE_SHARE_SELCTOR': {

    let category = payload.checkboxName;
    let status = payload.status;

    let newSocialSelect = {
      ...state.socialSelect,
    };
    newSocialSelect[category] = status;

    let newState = {
      ...state,
      socialSelect: newSocialSelect,
    };

    return newState;
  }
  case 'NEW_CONTACT_SCAN': {
    let newState = {
      ...state,
      contacts: [...state.contacts, payload],
    };
    return newState;
    
  }

  case 'RETRIEVED_DATA': {
    return payload;
  }

  default:
    return state;
  }
};

// async function _storeData(state) {
//   try {
//     await AsyncStorage.setItem('user', JSON.stringify(state));
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function _retrieveData()  {
//   try {
//     const value = await AsyncStorage.getItem('user');
//     if (value !== null) {
//       console.log(value);
//     }
//   } catch(error) {
//     console.error(error);
//   }
// }

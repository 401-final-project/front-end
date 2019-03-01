// import { AsyncStorage } from 'react-native';

let defaultUser = {
  name: 'Fletcher',
  phone: '3334446666',
  linkedin: 'fletcher-larue',
  facebook: 'facebooker',
  pinterest: 'interesting',
};

let defaultContacts = [
  {
    'name':'Fletcher1',
    'phone':'3334446666',
    'email':'email@gmail.com',
    'linkedin':'fletcher-larue',
    'pinterest':'asdFletch',
  },
  {
    'name':'Fletcher2',
    'phone':'3334446666',
    'email':'email@gmail.com',
    'linkedin':'fletcher-larue',
    'pinterest':'pinteresting',
    'twitter':'exampletiktoker',
    'facebook':'booker',
    'github':'gitter',
    'instagram':'grammer',
    'snapchat':'snapper',
  },
  {
    'name':'Fletcher3',
    'phone':'3334446666',
    'email':'email@gmail.com',
    'linkedin':'fletcher-larue',
    'pinterest':'pinteresting',
    'twitter':'exampletiktoker',
    'facebook':'booker',
    'github':'gitter',
    'instagram':'grammer',
    'snapchat':'snapper',
  },
  {
    'name': 'Fletchers Phone',
    'userId': '7de54850-b9f5-471e-9375-fd8c718c6d04',
    location: {
      latitude: 1.1,
      longitude: 2.3,
      time: 0,
    },
  },
  {
    'name': 'Jakes phone',
    'userId': '20afc315-3a54-4c77-8ff8-09623669d2dd',
    location: {
      latitude: 1.1,
      longitude: 2.3,
      time: 0,
    },
  },
  {
    'name': 'Michaels phone',
    'userId': '9A91C9D6-DF2F-475E-9EAD-216510E799CC',
    location: {
      latitude: 1.1,
      longitude: 2.3,
      time: 0,
    },
  }
];


let initialState = {
  userInfo: {},
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
  contacts: defaultContacts,
  recentScan: {},
  userId: Expo.Constants.installationId,
  location: {
    latitude: 0,
    longitude: 0,
    time: Date.now(),
  },
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
  case 'UPDATE_LOCATION': {
    let newState = {
      ...state,
      location: payload,
    };
    return newState;
  }
  
  case 'RETRIEVED_DATA': {
    return payload;
  }

  case 'UPDATE_SINGLE_CONTACT_LOCATION': {

    let contactToUpdateIndex;
    
    for(let i = 0; i < state.contacts.length; i++){
      if(state.contacts[i].userId === payload.userId){
        contactToUpdateIndex = i;
      }
    }

    if(!contactToUpdateIndex){ return state; }

    const newContact = {
      ...state.contacts[contactToUpdateIndex],
      location: payload.location,
    };

    const newContacts = [...state.contacts];
    newContacts[contactToUpdateIndex] = newContact;

    const newState = {
      ...state,
      contacts: newContacts
    }

    return newState;
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
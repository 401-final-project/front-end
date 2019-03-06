// import { AsyncStorage } from 'react-native';

let defaultUser = {
  name: 'Fletcher',
  phone: '3334446666',
  linkedin: 'fletcher-larue',
  facebook: 'facebooker',
  pinterest: 'interesting',
};

let initialState = {
  userInfo: {},
  socialSelect: {
    name: true,
    company: false,
    jobTitle: false,
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
      'name':'Fletcher Larue',
      'email':'laruefletcher@gmail.com',
      'linkedin':'fletcher-larue',
      'github':'asdFletcher',
    },
    {
      'name':'Jared Pattison',
      'email':'jaredpattison@gmail.com',
      'linkedin':'jaredpattison',
      'github':'jaredpattison',
    },
    {
      'name':'Michael George',
      'email':'mgeorge9492@gmail.com',
      'linkedin':'mageorge9492',
      'github':'michaelageorge',
    },
    {
      'name':'Ryan Gallaway',
      'email':'rkgallaway@msn.com',
      'linkedin':'ryangallaway',
      'github':'rkgallaway',
    },
    {
      'name':'Siobhan Niess',
      'email':'rkgallaway@gmail.com',
      'linkedin':'siobhan-niess',
      'github':'niesssiobhan',
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

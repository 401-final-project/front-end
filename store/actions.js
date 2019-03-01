import util from 'react-native-util';

import { endpoint , updateUser } from '../components/getter.js';

// ~~~~~~~~~~ update user info ~~~~~~~~~~~~~~~~~~
export const updateLocalUserInfo = (payload) => {
  return {
    type: 'UPDATE_USER_INFO',
    payload,
  };
};
export const updateRemoteUserInfo = (state) => {
  updateUser(state);
  return {
    type: 'nothing',
    state,
  };
};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export const updateShareSelector = (payload) => {
  return {
    type: 'UPDATE_SHARE_SELCTOR',
    payload,
  };
};
export const newContactScan = (payload) => {
  return {
    type: 'NEW_CONTACT_SCAN',
    payload,
  };
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const updateLocation = (payload) => {
  // console.log('UPDATE LOCATION ACTION CALLED')

  return {
    type: 'UPDATE_LOCATION',
    payload,
  };
};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const retrievedLocalStorage = (payload) => {
  return {
    type: 'RETRIEVED_DATA',
    payload,
  };
};

export const updateMyContacts = (payload) => {
  return {
    type: 'UPDATE_SINGLE_CONTACT_LOCATION',
    payload,
  };
}


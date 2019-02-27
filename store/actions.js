import util from 'react-native-util';

export const updateUserInfo = (payload) => {
  return {
    type: 'UPDATE_USER_INFO',
    payload,
  };
};

export const updateShareSelector = (payload) => {
  return {
    type: 'UPDATE_SHARE_SELCTOR',
    payload,
  };
};
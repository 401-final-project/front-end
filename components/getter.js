

let endpoint = 'https://fl-401-final-back-end-api.herokuapp.com/api/v1/find-or-create-users';

fetch(endpoint, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({state}),
});


fetch(endpoint, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({state}),
});

// spinup , find if the user exists , if it does send them the data

// if it does not, create a new user

// 

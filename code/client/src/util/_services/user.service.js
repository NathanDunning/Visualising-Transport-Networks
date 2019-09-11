/* eslint-disable import/prefer-default-export */
// import config from 'config';

const btoa = require('btoa');

export const userService = {
  login,
  logout
};

function login(username, password) {
  console.log('inside login function');
  const auth = `Basic ${btoa(`${username}:${password}`)}`;
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      Authorization: auth
    }
  };

  console.log('before fetch');

  return fetch('http://spring-boot:8080/home', requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a user in the response
      if (user) {
        // store user details and basic auth credentials in local storage
        // to keep user logged in between page refreshes
        user.authdata = window.btoa(`${username}:${password}`);
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

/* function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8080/get/users`, requestOptions).then(handleResponse);
} */

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        console.log('Inside error');
        alert('Invalid username or password');
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

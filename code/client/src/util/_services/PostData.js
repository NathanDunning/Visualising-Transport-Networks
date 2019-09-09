/* eslint-disable prefer-promise-reject-errors */
export function PostData(type, auth) {
  console.log('Inside PostData');
  const BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312/home';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',

      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth,
    },
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // login successful if there's a user in the response
      if (user) {
        // store user details and basic auth credentials in local storage
        // to keep user logged in between page refreshes
        console.log(`auth:${auth}`);
      }
      return user;
    }).catch(() => {
      console.log('inside catch');
      alert('Invalid username or password');
      return Promise.reject('error');
    });
}

export function getTravelData(type, auth) {
  console.log('Inside travel data');
  const BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312/get/bus/travelDetails';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth,
    },
    body: JSON.stringify({
      city: 'Wellington',
      from_time: 944,
      to_time: 960,
      date: '2018-11-28',
    }),
    method: 'POST',
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then((data) => data).catch(() => {
      console.log('inside catch');
      return Promise.reject('error');
    });
}

export function getDemographicData(type, auth) {
  console.log('Inside demographic data');
  const BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312/get/area/geocodes';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth,
    },
    method: 'GET',
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then((data) => data).catch(() => {
      console.log('inside catch');
      return Promise.reject('error');
    });
}


function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log('Inside handle response');
    if (response.status === 401) {
      console.log('Inside error');
      alert('Invalid username or password');
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export function PostData(type, auth) {
  let BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312//home';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',

      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth
    }
  };

  console.log('fetching: ' + BaseUrl);
  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a user in the response
      if (user) {
        // store user details and basic auth credentials in local storage
        // to keep user logged in between page refreshes
      }
      return user;
    })
    .catch(function() {
      alert('Invalid username or password');
      return Promise.reject('error');
    });
}

export function getTravelData(type, auth) {
  let BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312//get/bus/travelDetails';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth
    },
    body: JSON.stringify({
      city: 'Wellington',
      from_time: 944,
      to_time: 960,
      date: '2018-11-28'
    }),
    method: 'POST'
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    })
    .catch(function() {
      return Promise.reject('error');
    });
}

export function getAllTravelLatLng(auth) {
  let BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312//get/bus/travelAllDetails';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth
    },
    method: 'GET'
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    })
    .catch(function() {
      return Promise.reject('error');
    });
}

export function getDemographicData(type, auth) {
  let BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312//get/area/geocodes';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth
    },
    method: 'GET'
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    })
    .catch(function() {
      return Promise.reject('error');
    });
}

export function getCities(type, auth) {
  let BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312//get/cities';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth
    },
    method: 'GET'
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    })
    .catch(function() {
      return Promise.reject('error');
    });
}

export function getLatLng(auth) {
  let BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312//get/area/latlng';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth
    },
    method: 'GET'
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    })
    .catch(function() {
      return Promise.reject('error');
    });
}

export function getTime(type, auth) {
  let BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312//get/time';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth
    },
    method: 'GET'
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    })
    .catch(function() {
      return Promise.reject('error');
    });
}

export function getDate(type, auth) {
  let BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312//get/dates';
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: auth
    },
    method: 'GET'
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    })
    .catch(function() {
      return Promise.reject('error');
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(text);
    if (response.status === 401) {
      alert('Invalid username or password');
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

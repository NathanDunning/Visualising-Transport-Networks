export function PostData(type, auth) {
  let BaseUrl = 'https://barretts.ecs.vuw.ac.nz:59312/home';
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
    .catch(() => {
      alert('Invalid username or password');
      return Promise.reject('error');
    });
}

/**
 * Fetches travel data rom the database
 * @param {*} date
 * @param {*} from_time
 * @param {*} to_time
 * @param {*} travelPoints
 * @param {*} auth
 */
export function getTravelData(date, from_time, to_time, travelPoints, auth) {
  const BaseUrl = 'https://barretts.ecs.vuw.ac.nz:59312/get/bus/travelDetails';
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
      from_time: from_time,
      to_time: to_time,
      date: date,
      suburb_travel_points: travelPoints
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
  let BaseUrl = 'https://barretts.ecs.vuw.ac.nz:59312/get/bus/travelAllDetails';
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
  let BaseUrl = 'https://barretts.ecs.vuw.ac.nz:59312/get/area/geocodes';
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
  let BaseUrl = 'https://barretts.ecs.vuw.ac.nz:59312/get/cities';
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
  let BaseUrl = 'https://barretts.ecs.vuw.ac.nz:59312/get/area/latlng';
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

export function getTime(date, auth) {
  let BaseUrl = 'https://barretts.ecs.vuw.ac.nz:59312/get/time?dateField=' + date;
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
  let BaseUrl = 'https://barretts.ecs.vuw.ac.nz:59312/get/dates';
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

/**
 * Parses through return data in JSON object and
 * checks the status of the response before throwing an error
 * if reponse unsuccessful else returning parsed object.
 * @param {*} response JSON object
 */
function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (response.status === 401) {
      alert('Invalid username or password');
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export function PostData(type, auth) {
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
      }
      return user;
    }).catch(() => {
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
      from_time: from_time,
      to_time: to_time,
      date: '2018-11-29',
      suburb_travel_points: travelPoints
    }),
    method: 'POST',
  };

  return fetch(BaseUrl, requestOptions)
    .then(handleResponse)
    .then((data) => data).catch(() => Promise.reject('error'));
}

/**
 * Fetches and returns Longitude and Latitude objects of all travel data
 * processed through the handleRespnse function and assigns result to data
 * @param {*} auth 
 */
export function getAllTravelLatLng(auth) {
  const BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312/get/bus/travelAllDetails';
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
    .then((data) => data).catch(() => Promise.reject('error'));
}

/**
 * Fetches and returns demographic data (JSON object) from the database
 * processes it through the handleRespnse
 * @param type
 * @param auth 
 */
export function getDemographicData(type, auth) {
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
    .then((data) => data).catch(() => Promise.reject('error'));
}

export function getCities(type, auth) {
  const BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312/get/cities';
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
    .then((data) => data).catch(() => Promise.reject('error'));
}

/**
 * Fetches and return time details for collected data from the database
 * processes it through the handleRespnse function
 */
export function getTime(type, auth) {
  const BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312/get/time';
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
    .then((data) => data).catch(() => Promise.reject('error'));
}

export function getDate(type, auth) {
  const BaseUrl = 'http://barretts.ecs.vuw.ac.nz:59312/get/dates';
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
    .then((data) => data).catch(() => Promise.reject('error'));
}

/**
 * Parses through return data in JSON object and 
 * checks the status of the response before throwing an error
 * if reponse unsuccessful else returning parsed object.
 * @param {*} response JSON object
 */
function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (response.status === 401) {
      alert('Invalid username or password');
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

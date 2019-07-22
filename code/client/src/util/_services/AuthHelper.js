import decode from 'jwt-decode';
var btoa = require('btoa');

export const AuthHelper = {
    login,
    logout,
    checkStatus,
    loggedIn
}

    function login(username, password) {
        // Fetch from URL + path API for a token
        var auth = 'Basic '+btoa(""+username+":"+password+"");
        const request = {
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin' : '*',
                'Authorization':auth}
        }
        if (loggedIn()) {
            request.headers["Authorization"] = "Bearer " + getToken();
          }
        return fetch(`http://localhost:8080/home`, request)
        .then(handleResponse)
        .then(user => {
            //User is in response
            if (user) {
                //Store user details as session storage
                setToken(handleResponse.token)
                user.auth = window.btoa(username + ':' + password)
            }
            return user
        })
    }
    

   function loggedIn() {
        // Checks if there is a valid saved token
        const token = getToken() // Gets the token from the cache
        return !!token && !isTokenExpired(token) 
    }

    function isTokenExpired(token) {
        try {
            const decoded = decode(token)
            if (decoded.exp < Date.now / 1000) {
                // Check if token is expired
                return true
            } else return false
        } catch (err) {
            console.log("Expired token failed")
            return false
        }
    }

    function setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem("id_token", idToken);
    }

    function getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem("id_token");
    }

    function logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem("id_token");
    }

    function getConfirm() {
        // Using jwt-decode npm package to decode the token
        let answer = decode(getToken());
        console.log("Recieved answer!");
        return answer;
    }

    function fetch(url, options) {
        // performs api calls sending the required authentication headers
        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (loggedIn()) {
          options.headers["Authorization"] = "Bearer " + getToken();
        }

        return fetch(url, options)
          .then(checkStatus)
          .then(response => response.json());
    }

    function checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
          // Success status lies between 200 to 300
          return response;
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      }

    function handleResponse(response) {
        response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    console.log("Error 401")
                    alert("Invalid username or password")
                } 
                const error = (data && data.message) || response.statusText
                return Promise.reject(error);
            }
            else {
                return Promise.resolve(response)
            }
        })
    }

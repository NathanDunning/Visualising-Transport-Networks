export function PostData(type, auth) {
    console.log("Inside PostData")
        let BaseUrl = 'http://localhost:8081/home'
        //console.log(BaseUrl)
       /*  return new Promise((resolve, reject) => {
            // Fetch from URL + path
            fetch(BaseUrl, {
                'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Access-Control-Allow-Origin' : '*',
                    'Authorization':auth
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Inside then");
                // Resolve the response if successful
                resolve(responseJson);
            })
            .catch((error) => {
                console.log("Inside error");
                // Log the error if no response
                reject(error)
            })
        }) */
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',

                'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',
                'Authorization':auth}
        };

        return fetch(BaseUrl, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                console.log("auth:" + auth)
            }
            return user;
        }).catch(function() {
           console.log("inside catch")
           alert("Invalid username or password")
           return Promise.reject("error");
        });

    }

    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            console.log("Inside handle response")
            if (response.status === 401) {
                console.log("Inside handle response if")
                /* if (response.status === 401) { */
                    console.log("Inside error");
                    alert("Invalid username or password")
                   /*  }
 */    console.log("Inside handle response out if")
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    }

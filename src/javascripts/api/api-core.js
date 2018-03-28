// @flow
const ApiCore = (function(baseUrl: string) {
  const headers = new Headers({
    'Accept': 'application/json',
    'Authorization': null
  });

  const genericRequest = function (url: string, method: string, data?: Object) {
    const options = {
      body: !!data ? JSON.stringify(data) : null,
      headers: headers,
      method: method
    };

    return fetch(`${baseUrl}/${url}`, options)
      .then(response => {
        return new Promise((resolve, reject) => {
          if (response.ok) {
            resolve(response.json())
          } else {
            reject(response)
          }
        })
      });
  };

  return {
    get(url: string) {
      return genericRequest(url, 'GET');
    },
    post(url: string, data: Object) {
      return genericRequest(url, 'POST', data);
    },
    put(url: string, data: Object) {
      return genericRequest(url, 'PUT', data);
    },
    delete(url: string) {
      return genericRequest(url, 'DELETE');
    }
  }
})('https://api.neatcity.pl?');

export default ApiCore;

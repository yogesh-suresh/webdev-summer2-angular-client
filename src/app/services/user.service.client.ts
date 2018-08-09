// import {promise} from 'selenium-webdriver';
// import rejected = promise.rejected;

export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://secure-coast-10881.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://secure-coast-10881.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch('https://secure-coast-10881.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://secure-coast-10881.herokuapp.com/api/profile',
      {
        credentials: 'include',
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://secure-coast-10881.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUsername(username) {

    const credentials = {
      username: username,
    };
    return fetch('https://secure-coast-10881.herokuapp.com/api/register', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  updateUser(user) {
    return fetch('https://secure-coast-10881.herokuapp.com/api/user', {
      method: 'PUT',
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}

import { WebAuth } from 'auth0-js';
import jwtDecode from 'jwt-decode';

class Auth0Util {
  constructor() {
    this.webAuth = new WebAuth({
      domain: process.env.domain,
      clientID: process.env.clientID,
      responseType: 'id_token',
      redirectUri: process.env.baseUrl + '/callback',
    });
  }

  login() {
    this.webAuth.authorize();
  }

  async getAuthResult() {
    return new Promise((resolve, reject) => {
      this.webAuth.parseHash((err, authResult) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(authResult);
      });
    });
  }

  getUserProfile(idToken) {
    return jwtDecode(idToken);
  }
}

export default ({ app }, inject) => {
  inject('auth0', new Auth0Util());
}

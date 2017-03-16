import Auth0Lock from 'auth0-lock';
// import { browserHistory } from 'react-router-dom';

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
<<<<<<< HEAD
        redirectUrl: 'http://localhost:8080/dashboard',
        responseType: 'token'
=======
        // lets change this to 8080 so that it hits the dev server instead of our server on redirect.
        redirectUrl: 'http://localhost:8080/dashboard',
        responseType: 'token',
>>>>>>> setup auth
      } 
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken);
    // navigate to the home route
<<<<<<< HEAD
    //redirect to dashboard
=======
    // browserHistory.replace('/home');
>>>>>>> setup auth
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
  }
}

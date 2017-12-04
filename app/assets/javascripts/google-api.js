function gapiLoaded() {
  gapi.signin2.render('sign-in-button', {
    'scope': 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.metadata.readonly',
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSignIn,
    'onfailure': onFailedSignIn
  });

  var auth2;
  gapi.load('auth2', () => {

    auth2 = gapi.auth2.getAuthInstance();
    if (!auth2.isSignedIn.get()) {
      $('#sign-in-button').css('display', 'block');
    }
    // gapi.auth2.init({
    //   client_id: '233361855229-omsegl02h7ggvurbqk4pj0g6drs496js.apps.googleusercontent.com',
    //   scope: 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.readonly'
    // }).then(() => {
    // });
  }); 
}

function onSignIn(googleUser) {
  // refreshes token on sign in, extending token expiration
  /**
   * TODO this will send a POST request to /login on every page, which causes
   * several problems, currently:
   * 1) If a user is already logged in on the server, this is redundant, and will
   *    log the user in a second time
   * 2) You need some verification method to make sure the Google user and the
   *    logged in user are the same; otherwise, you must do something. The default
   *    behavior would be to just log the other user in, which probably isn't wise
   */
  googleUser.reloadAuthResponse().then(() => {
    // add id_token to form parameters and submit the form
    $('#id_token').val(googleUser.getAuthResponse().id_token);
    $('#new_user').submit();
  })
}

function onFailedSignIn(error) {
  console.log(error);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    console.log('User signed out.');
    $('.logout_user').submit();
  });
}
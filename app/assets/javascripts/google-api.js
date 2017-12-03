function gapiLoaded() {
  gapi.signin2.render('sign-in-button', {
    'scope': 'profile email',
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSignIn,
    'onfailure': onFailedSignIn
  });

  var auth2;
  gapi.load('auth2', () => {
    gapi.auth2.init({
      client_id: '233361855229-omsegl02h7ggvurbqk4pj0g6drs496js.apps.googleusercontent.com'
    }).then(() => {
      auth2 = gapi.auth2.getAuthInstance();
      if (!auth2.isSignedIn.get()) {
        $('#sign-in-button').css('display', 'block');
      }
    });
  }); 
}

function onSignIn(googleUser) {
  // refreshes token on sign in, extending token expiration
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
  });
}
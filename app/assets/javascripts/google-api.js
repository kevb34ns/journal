//TODO create promise that resolves when gapi is loaded, to init gapi.auth2

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    console.log('User signed out.');
  });
}
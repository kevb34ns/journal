const SCOPES = 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.metadata.readonly';
const CLIENT_ID = '233361855229-omsegl02h7ggvurbqk4pj0g6drs496js.apps.googleusercontent.com';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

function authPlatformLoaded() {
  gapi.signin2.render('sign-in-button', {
    'scope': 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.metadata.readonly',
    'onsuccess': onSignIn,
    'onfailure': onFailedSignIn
  });

  var auth2;
  gapi.load('auth2', () => {
    auth2 = gapi.auth2.getAuthInstance();
    if (!auth2.isSignedIn.get()) {
      $('#sign-in-button').css('display', 'block');
    }
  }); 
}

function drivePlatformLoaded() {
  var auth2;
  gapi.load('auth2:client', () => {
    gapi.client.init({
      apiKey: 'AIzaSyCTeQrI1BY-9gwhf8Iyw1xRasmMH82oM2Q',
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(() => {
      // TODO demo: handle changes to user sign-in state
      gapi.client.drive.files.list({
        // TODO use this to find the id of the entries/ folder, and create it
        // if needed. Put it in a separate function
        'pageSize': 10,
        'fields': "nextPageToken, files(id, name)"
      }).then((response) => {
        console.log(response.result.files);
      })
      
      // TODO demo: get profile image
      let profile = gapi.auth2.getAuthInstance()
                              .currentUser.get()
                              .getBasicProfile();
      $(".profile-image").attr('src', profile.getImageUrl());
      $(".profile-image").css('border-radius', "50%");
    })
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

function createEntry() {
  $.post({
    url: "/entries",
    dataType: "json",
    success: (entry) => {
      // TODO create a file with the name "#{entry.id}"
    }
  })
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    console.log('User signed out.');
    $('.logout_user').submit();
  });
}
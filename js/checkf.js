
  function check()
  {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location = "maps.html";
        } else {
            window.location = "phoneAth.html";
        }
      });
}
  
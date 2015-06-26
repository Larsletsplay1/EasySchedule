console.log("JavaScript läuft!");

// add showConfiguration
Pebble.addEventListener('showConfiguration', function(e) {
  // Show config page
  Pebble.openURL('http://digitalesgestalten.tk/pebble/settings.html');
});

// add webViewClosed
Pebble.addEventListener('webviewclosed',
  function(e) {
    var textreturn = getParam(e.response, "text");
    console.log("Returned: " + e.response);
    console.log("Returned Text: " + textreturn);
  } 
);

// Something like this to get query variables.
function getParam(query, variable) {
  // Find all URL parameters;
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    // If the query variable parameter is found, decode it to use and return it for use
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return false;
}

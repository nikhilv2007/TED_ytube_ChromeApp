chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    innerBounds: {
		'width': 400,
	    'height': 400
    },
    outerBounds:{
    },
    //resizable: false,
    alwaysOnTop: true,
	/*frame: {
		'type':'none'
	}*/
  });
});

chrome.runtime.onSuspend.addListener(function() {
  // Do some simple clean-up tasks.
});
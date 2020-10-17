let app = { 
    onDeviceReady: function() {
        // Cordova is now initialized. Have fun!

        console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
         
    }   
}

document.addEventListener('deviceready', app.onDeviceReady, false);

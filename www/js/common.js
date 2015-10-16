document.addEventListener("deviceready", shOnDeviceReady, false);
document.addEventListener("resume", shResume, false);


function shFailure(){
var sh = cordova.require("com.streethawk.core.Streethawk");
	sh.shRegisterViewCallback(launchAppPage,shFailure);
}
function launchAppPage(result){
		var sh = cordova.require("com.streethawk.core.Streethawk");
		sh.shRegisterViewCallback(launchAppPage,shFailure);
		window.location = result;
        }
function shOnDeviceReady(){
	var sh = cordova.require("com.streethawk.core.Streethawk");
	sh.shRegisterViewCallback(launchAppPage,shFailure);
}
function shResume(){
	var sh = cordova.require("com.streethawk.core.Streethawk");
	sh.shGetViewName(function(result){
		if(null!=result){
			launchAppPage(result);
		}
	},function(){});
}



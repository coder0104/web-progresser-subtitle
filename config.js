//ProPresenter-OBS Configuration
var config = {
	//IP and Port for ProPresenter Network Connection
	//Enable under ProPresenter Preferences -> Network tab
	//Enable Network and Stage Display App
	'propresenter_ip' : '192.168.10.4',
	'propresenter_port' : 49294, //port from Network NOT Stage Display App
	'propresenter_password' : '1234', //password from Stage Display App
	'fade' : true,
	'fade_speed' : 200, // milliseconds 600 slow, 400 normal, 200 fast
	'fade_repeated_text' : true, // set true to fade in/out repeated text
	'noText' : 'no-obs' // use this word in the slide notes to prevent text being sent to OBS
};

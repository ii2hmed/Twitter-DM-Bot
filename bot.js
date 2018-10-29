console.log('starting...');
var Twit = require('twit'); // Include Twit Package
var config = require('./config'); // Include Twitter auth credentials

var T = new Twit(config);
var myStream = T.stream('user');
myStream.on('follow', followed); // Run 'follow' when you get a new follower.
console.log('Entering user stream.');


function followed(eventMsg) { 
	console.log('Someone followed you.');
	var follower_screen_name = eventMsg.source.screen_name; // Get new followers username. Maybe use it. Maybe don't
	T.post("direct_messages/new", {
		screen_name: follower_screen_name,
		text: 'Thanks fow following!'
	});
}
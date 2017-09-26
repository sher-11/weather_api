const request = require('request');
const yargs = require('yargs');
const argv = yargs.argv;

var encodedcity = encodeURIComponent(argv.city);


request({
	url:`http://api.openweathermap.org/data/2.5/weather?q=${encodedcity}&units=metric&appid=45e77d4411c77c238423721d115a4691`,
	json: true
},(error, response, body)=>{
	if(error){
		console.log("unable to connect to server")
	} 
	else if(body.message === 'city not found'){
		console.log("Incorrect location")

	}else {
	console.log(`temperature: ${body.main.temp}`);
	//console.log(`Latitude: ${body.main.lat}`);
	//console.log(`Longitude: ${body.main.lng}`);
	console.log(`Humidity: ${body.main.humidity}`);
	console.log(`Pressure: ${body.main.pressure}`);
}
});
const request = require('request');

const forecast = (lat, lon, callback) => {
	const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=6c90ca7246f122c3febccc87f3d5310a`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service.', undefined);
		} else if (body.message !== undefined) {
			callback('Unable to find location', undefined);
		} else {
			callback(
				undefined,
				'The temperature currently is ' +
					body.main.temp +
					' degrees with ' +
					body.weather[0].description +
					' for weather.'
			);
		}
	});
};

module.exports = forecast;

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
				'The temperature is currently ' +
					body.main.temp +
					'* with ' +
					body.weather[0].description +
					' for weather. The humidity level is at ' +
					body.main.humidity +
					'%'
			);
		}
	});
};

module.exports = forecast;

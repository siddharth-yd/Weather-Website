const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=43f645c956906c9f251354b3c3332e12&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error){
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. And precipitation is ' + body.current.precip);
        }
    })
}

module.exports = forecast;
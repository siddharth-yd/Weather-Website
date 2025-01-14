const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGVqa28iLCJhIjoiY2xsMmJiMGk4MDJlODNkbXQyZmxsbXRhcCJ9.XGy8GOULXMuhVXpCPYmnQQ';

    request({ url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to Location Services!', undefined);
        } else if(body.features.length == 0){
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
            // console.log(latitude, longitude);
        }
    })
}

module.exports = geocode;
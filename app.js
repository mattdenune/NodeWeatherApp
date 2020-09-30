const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=bd3261008503a17797e8570d8dfa32f7&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response, body) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     }else if(body.error) {
//         console.log('Unable to find location')
//     }else {
//         console.log(`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
//     }
// })

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/brooklyn.json?access_token=pk.eyJ1IjoibWF0dGRlbnVuZSIsImEiOiJja2ZvY3QzNm0xbjhjMnl0NHBtd3RxdHZjIn0.ZYESj2iud5QW7EODnZMNKQ&limit=1'

request({url: geocodeUrl, json: true}, (error, response, body) => {

    if (error) {
        console.log('Unable to connect to mapping service')
    } else if (body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        const latitude = body.features[0].center[1]
        const longetude = body.features[0].center[0]
        console.log(`The latitude is ${latitude} and the longetude is ${longetude}.`)
    }
})
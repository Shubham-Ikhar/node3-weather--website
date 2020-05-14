const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f6cf6f048a85338dafb7a03c40ed3696&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!, forecast', undefined)
        } else if (body.error) {
            callback('Unable to find location (forecast)', undefined)
        } else {
            callback(undefined,'This is the location of '+ body.location.name + 'It is located in ' + body.location.country +' It is currently ' + body.current.temperature + ' degress out. '+ ' Current wind speed at '+  body.location.name + ' is ' + body.current.wind_speed+ '. ' +' For more info contact shubhamikhar3@gmail.com '  )
        }
    })
}

module.exports = forecast
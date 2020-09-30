const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utlis/geocode')
const forecast = require('./utlis/forecast')



geocode('fort green', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
    
    forecast(-75.7088, 44.1545, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })
})
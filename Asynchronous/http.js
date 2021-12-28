const request= require('request')

const url='https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'

request({url:url},(error,response)=>{
    const data=JSON.parse(response.body)
    console.log(data)
})

// Heandeling Error

const GeocodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

request({url:GeocodeUrl},(error,response)=>{

    if(error){
        console.log('unlabel to network')
    }else{
        const latitude= response.body.features[0].center[0]
        const longitude= response.body.features[0].center[1]
    
    console.log(latitude,longitude)
    }
    
})
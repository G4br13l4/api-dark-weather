obtainData = () => {
    const latitude = 37.8267;
    const longitude = -122.4233;
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/71a64de0f9b31aa09f202d6d30b4a25e/${latitude},${longitude}`)
        .then(function(response){
            //console.log(response); //asi no te lo da en json
            response.json().then(function(result){
                console.log(result);
                const utcSeconds = result.currently.time;
                const date = new Date(); //día de HOY
                date.setUTCSeconds(utcSeconds);
                
                const windSpeed = result.currently.windSpeed;
                const humidity = result.currently.humidity;
                const uvIndex = result.currently.uvIndex;
                const pressure = result.currently.pressure;
            })
        })
        .catch(function(err){
            console.log(err);
        });
}

obtainData();
  
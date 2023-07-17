
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a0db74f5amsh5f84bf7a9b349fdp1011d0jsnc21fbb7eed56',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather=(city)=>{
	cityname.innerHTML=city
     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed




	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		feels_like1.innerHTML = response.feels_like
		humidity1.innerHTML = response.humidity
		max_temp1.innerHTML = response.max_temp
		min_temp1.innerHTML = response.min_temp
		sunrise1.innerHTML = response.sunrise
		sunset1.innerHTML = response.sunset
		temp1.innerHTML = response.temp
		wind_degrees1.innerHTML = response.wind_degrees
		wind_speed1.innerHTML = response.wind_speed
		
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		feels_like21.innerHTML = response.feels_like
		humidity21.innerHTML = response.humidity
		max_temp21.innerHTML = response.max_temp
		min_temp21.innerHTML = response.min_temp
		sunrise21.innerHTML = response.sunrise
		sunset21.innerHTML = response.sunset
		temp21.innerHTML = response.temp
		wind_degrees21.innerHTML = response.wind_degrees
		wind_speed21.innerHTML = response.wind_speed
		
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		max_temp3.innerHTML = response.max_temp
		min_temp3.innerHTML = response.min_temp
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
		temp3.innerHTML = response.temp
		wind_degrees3.innerHTML = response.wind_degrees
		wind_speed3.innerHTML = response.wind_speed
		
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		max_temp4.innerHTML = response.max_temp
		min_temp4.innerHTML = response.min_temp
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
		temp4.innerHTML = response.temp
		wind_degrees4.innerHTML = response.wind_degrees
		wind_speed4.innerHTML = response.wind_speed
		
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		feels_like5.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		max_temp5.innerHTML = response.max_temp
		min_temp5.innerHTML = response.min_temp
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset
		temp5.innerHTML = response.temp
		wind_degrees5.innerHTML = response.wind_degrees
		wind_speed5.innerHTML = response.wind_speed
		
	})
	.catch(err => console.error(err));




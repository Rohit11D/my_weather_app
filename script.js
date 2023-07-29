const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f59f143caamsh721c7ebf4c57927p16200djsn1d349362eb33',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


function getTimeStandard(sun_time) {
	// 1. Create a new Date object using the UNIX timestamp
	const sunriseDate = new Date(sun_time * 1000); // Convert to milliseconds (* 1000)
  
	// 2. Extract the hours, minutes, and AM/PM from the Date object
	const sunriseHours = sunriseDate.getHours();
	const sunriseMinutes = sunriseDate.getMinutes();
	const sunriseAmPm = sunriseHours >= 12 ? 'PM' : 'AM';
	const sunriseStandardHours = sunriseHours % 12 || 12; // Convert 0 to 12 for 12 AM
  
	// 3. Format the sunrise time in standard time (12-hour clock format)
	const sunriseTimeStandard = `${sunriseStandardHours}:${String(sunriseMinutes).padStart(2, '0')} ${sunriseAmPm}`;
  
	return sunriseTimeStandard;
  }
  
 
 
 
 
async function fetchData(city){
try {
	cityName.innerHTML = city;
	const response = await fetch(url + city, options);
	const result = await response.json();
       
	const sunriseTimeStandard = result.sunrise;
	const sunsetTimeStandard = result.sunset;
console.log('Sunrise Time (Standard):', sunriseTimeStandard);



//cloud_pct.innerHTML = result.cloud_pct;
document.getElementById('temp2').innerHTML = result.temp;
document.getElementById('temp').innerHTML = result.temp;

 feels_like.innerHTML = result.feels_like;
 humidity2.innerHTML = result.humidity;
 humidity.innerHTML = result.humidity;

min_temp.innerHTML = result.min_temp;
max_temp.innerHTML = result.max_temp;
wind_speed.innerHTML = result.wind_speed;
wind_speed2.innerHTML = result.wind_speed;
wind_degrees.innerHTML = result.wind_degrees;
sunrise.innerHTML = getTimeStandard(sunriseTimeStandard) ;
sunset.innerHTML = getTimeStandard(sunsetTimeStandard);
console.log(result);
} catch (error) {
	console.error(error);
}
}
submit.addEventListener("click",(e)=>{
e.preventDefault(); //to prevent reloading
	console.log(city.value);
	fetchData(city.value);
});
fetchData("delhi");

//london
async function LondonfetchData(city){
	try {
		
		const response = await fetch(url + city, options);
		const result = await response.json();
		const sunriseTimeStandard = result.sunrise;
const sunsetTimeStandard = result.sunset;
		Lcloud_pct.innerHTML = result.cloud_pct;
Ltemp.innerHTML = result.temp;
Lfeels_like.innerHTML = result.feels_like;
Lhumidity.innerHTML = result.humidity;
Lmin_temp.innerHTML = result.min_temp;
Lmax_temp.innerHTML = result.max_temp;
Lwind_speed.innerHTML = result.wind_speed;
Lwind_degrees.innerHTML = result.wind_degrees;
Lsunrise.innerHTML = getTimeStandard(sunriseTimeStandard) ;
Lsunset.innerHTML = getTimeStandard(sunsetTimeStandard);

	console.log(result);
	} catch (error) {
		console.error(error);
	}
	}
	LondonfetchData("london");

	// paris
	async function parisfetchData(city){
		try {
			
			const response = await fetch(url + city, options);
			const result = await response.json();
			const sunriseTimeStandard = result.sunrise;
const sunsetTimeStandard = result.sunset;
			Pcloud_pct.innerHTML = result.cloud_pct;
	Ptemp.innerHTML = result.temp;
	Pfeels_like.innerHTML = result.feels_like;
	Phumidity.innerHTML = result.humidity;
	Pmin_temp.innerHTML = result.min_temp;
	Pmax_temp.innerHTML = result.max_temp;
	Pwind_speed.innerHTML = result.wind_speed;
	Pwind_degrees.innerHTML = result.wind_degrees;
	Psunrise.innerHTML = getTimeStandard(sunriseTimeStandard) ;
	Psunset.innerHTML = getTimeStandard(sunsetTimeStandard);
		console.log(result);
		} catch (error) {
			console.error(error);
		}
		}
		parisfetchData("paris");
	
		
	
	//Boston
	async function BostonfetchData(city){
		try {
			
			const response = await fetch(url + city, options);
			const result = await response.json();
			const sunriseTimeStandard = result.sunrise;
const sunsetTimeStandard = result.sunset;
			Bocloud_pct.innerHTML = result.cloud_pct;
	Botemp.innerHTML = result.temp;
	Bofeels_like.innerHTML = result.feels_like;
	Bohumidity.innerHTML = result.humidity;
	Bomin_temp.innerHTML = result.min_temp;
	Bomax_temp.innerHTML = result.max_temp;
	Bowind_speed.innerHTML = result.wind_speed;
	Bowind_degrees.innerHTML = result.wind_degrees;
	Bosunrise.innerHTML = getTimeStandard(sunriseTimeStandard) ;
	Bosunset.innerHTML = getTimeStandard(sunsetTimeStandard);
		console.log(result);
		} catch (error) {
			console.error(error);
		}
		}
		BostonfetchData("Boston");

		//Indore 

		async function IndorefetchData(city){
			try {
				
				const response = await fetch(url + city, options);
				const result = await response.json();
				const sunriseTimeStandard = result.sunrise;
const sunsetTimeStandard = result.sunset;
				Incloud_pct.innerHTML = result.cloud_pct;
		Intemp.innerHTML = result.temp;
		Infeels_like.innerHTML = result.feels_like;
		Inhumidity.innerHTML = result.humidity;
		Inmin_temp.innerHTML = result.min_temp;
		Inmax_temp.innerHTML = result.max_temp;
		Inwind_speed.innerHTML = result.wind_speed;
		Inwind_degrees.innerHTML = result.wind_degrees;
		Insunrise.innerHTML = getTimeStandard(sunriseTimeStandard) ;
		Insunset.innerHTML = getTimeStandard(sunsetTimeStandard);
			console.log(result);
			} catch (error) {
				console.error(error);
			}
			}
			IndorefetchData("Indore");

			//Berlin
			async function BerlinfetchData(city){
				try {
					
					const response = await fetch(url + city, options);
					const result = await response.json();
					const sunriseTimeStandard = result.sunrise;
const sunsetTimeStandard = result.sunset;r
			Becloud_pct.innerHTML = result.cloud_pct;
			Betemp.innerHTML = result.temp;
			Befeels_like.innerHTML = result.feels_like;
			Behumidity.innerHTML = result.humidity;
			Bemin_temp.innerHTML = result.min_temp;
			Bemax_temp.innerHTML = result.max_temp;
			Bewind_speed.innerHTML = result.wind_speed;
			Bewind_degrees.innerHTML = result.wind_degrees;
			Besunrise.innerHTML = getTimeStandard(sunriseTimeStandard) ;
			Besunset.innerHTML = getTimeStandard(sunsetTimeStandard);
				console.log(result);
				} catch (error) {
					console.error(error);
				}
				}
				BerlinfetchData("Berlin");
	
	

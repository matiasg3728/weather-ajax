var forcastData;
var zip = prompt("Enter your zip code");
$.ajax({
	url:'http://api.openweathermap.org/data/2.5/weather?zip='+ zip +',us&APPID=0bc7c108b391a1cc8b70c2af503d48fe',
	type: "GET",
	dataType:'json',
	success: function(data){
		forcastData = data;
		var body = document.getElementsByTagName("Body")[0];

		var hCity = document.getElementById("city");
	    hCity.innerHTML = data.name;
		var hCondition= document.getElementById("condition");
		hCondition.innerHTML=data.weather[0].description;

		var pUl = document.createElement("ul");

		var pMin = document.createElement("li");
		var pMax = document.createElement("li");
		var min = Math.floor((data.main.temp_min*9)/5 - 459.67);
		var pRN = document.createElement("li");
		var RN = Math.floor((data.main.temp*9)/5 - 459.67);
		var max = Math.floor((data.main.temp_max*9)/5 - 459.67);
		pMin.innerHTML ="Low: " + min;
		pMax.innerHTML ="High: " + max;
		pRN.innerHTML  ="its like "+RN+" or something right now"
		pUl.appendChild(pMax);
		pUl.appendChild(pMin);
		pUl.appendChild(pRN);

		body.appendChild(hCity);
		body.appendChild(hCondition);
		body.appendChild(pUl);
		
	},
	fail: function(error){
		console.log(error)
	}

	
});
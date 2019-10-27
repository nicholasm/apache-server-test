//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Prevent hash
$(document).ready(function(){
    $('a').on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 900);
    });
})



//Get Hostname
document.getElementById("hostname").innerHTML= "<strong>Host Name: </strong>" + location.hostname;



//Get DateTime
let date = new Date();  
let options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
};  

document.getElementById("DateTime").innerHTML = date.toLocaleTimeString("en-us", options);   


//Get Weather Frecast
function weather() {
  var location = document.getElementById("location");
  var apiKey = "b0a20cf39f08a5db286ff7ac7881afa6";
  var url = "https://api.forecast.io/forecast/";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

   // location.innerHTML =
     // "Latitude is " + latitude + "° Longitude is " + longitude + "°";
      
   Latitude.innerHTML =
    "<strong>Latitude: </strong>" + latitude + "°";

    Longitude.innerHTML =
     "<strong>Longitude: </strong>" + longitude + "°";

    $.getJSON(
      url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
      function(data) {
        $("#temp").html("<strong>Temperature: </strong>" + data.currently.temperature + "° F");
        $("#minutely").html("<strong>Forecast: </strong>" + data.minutely.summary);
      }
    );
  }
    

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();



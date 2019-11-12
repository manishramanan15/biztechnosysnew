function ipLookUp() {
    $.ajax('http://ip-api.com/json')
        .then(
            function success(response) {
                //console.log('User\'s Location Data is ', response);
                //console.log('User\'s Country', response.country);
                //getAddress(response.lat, response.lon)
            },

            function fail(data, status) {
                console.log('Request failed.  Returned status of',status);
            }
        );
}

/*
 *  This needs money with a billing account. So i am skipping this method I am just using the ipLookUp() Method.
function getAddress(latitude, longitude) {
    $.ajax('https://maps.googleapis.com/maps/api/geocode/json?' + 'latlng=' + latitude + ',' + longitude + '&key=' + "AIzaSyBdrO5yNmS80YFMd9eEarwnhiIAg9qrvWY")
        .then(
            function success(response) {
                console.log('User\'s Address Data is ', response)
            },
            function fail(status) {
                console.log('Request failed.  Returned status of',status)
            }
        )
}
*/

if ("geolocation" in navigator) {
    
    // check if geolocation is supported/enabled on current browser
    navigator.geolocation.getCurrentPosition(
        function success(position) {
            // for when getting location is a success
            console.log('latitude', position.coords.latitude,'longitude', position.coords.longitude);
            //getAddress(position.coords.latitude,position.coords.longitude)
            ipLookUp()   //Instead of using getAddress() Method i am using ipLookUp() As the getAddress() Method needs money with billing Account 
        },
        function error(error_message) {
            // for when getting location results in an error
            console.log('An error has occured while retrieving' +'location', error_message)
            ipLookUp()
        });
}
else
{
    // geolocation is not supported
    // get your location some other way
    console.log('geolocation is not enabled on this browser')
    ipLookUp()
}
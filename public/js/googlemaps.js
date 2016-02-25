function initMap()
{
	var ucsd_listing = {lat:32.8800604, lng:-117.2362022};
	var map = new google.maps.Map(document.getElementById('map'),{
		center:ucsd_listing,
		zoom:15
	});
	var marker = new google.maps.Marker({
		position: ucsd_listing,
		map:map,
		title:'CICC'
	});

	google.maps.event.addListener(map,'click',function(event)
	{
		addMarker(event.latLng,map);
	});
}

function addMarker(location,map)
{
	var marker = new google.maps.Marker({
		position:location,
		map:map
	});
}
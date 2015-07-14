// Example from leaflet main page

// create a map in the "map" div, set the view to a given place and zoom

//  --------------------------------------------------------------------------  
//  | Auteur        | Version | Date       | Commentaires                    |  
//  --------------------------------------------------------------------------  
//  | P. BERGE      |  01.00  | 20/06/2014 | Markers train and bus           |  
//  |               |         |            |                                 | 
//  --------------------------------------------------------------------------  


	var trainIcon = L.icon({
    iconUrl: 'IMAGES/Map_marker_icon_Nicolas_Mollet_Train_Transportation.png',
    iconRetinaUrl: 'IMAGES/Map_marker_icon_Nicolas_Mollet_Train_Transportation.png',
    iconSize: [38, 38],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

	var busIcon = L.icon({
    iconUrl: 'IMAGES/Map_marker_icon_Nicolas_Mollet_Train_Bus_Tourism.png',
    iconRetinaUrl: 'IMAGES/Map_marker_icon_Nicolas_Mollet_Train_Bus_Tourism.png',
    iconSize: [38, 32],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

for ( var i=0; i < stations.length; ++i ) 
{
    var popupContent =  '<iframe frameborder="0" scrolling="yes" width="400" height="300" src="' + stations[i].url + '"></iframe>';
//   markers, 
   L.marker( [stations[i].lat, stations[i].lng],{icon: trainIcon})
    	.addTo(map).bindPopup(popupContent,{
    				closeButton: true,
    				maxWidth: 1500, 
    				minWidth: 400,
    				maxHeight: 1500,
    				minHeight: 400
    				});
};

for ( var i=0; i < busstop.length; ++i ) 
{
//   markers, hovering test
   L.marker( [busstop[i].lat, busstop[i].lng],{icon: busIcon})
    	.addTo(map).bindPopup("<b>Bus 171</b><br>Arrêt "+ busstop[i].name);

busstop.on('mouseover', function(){marker.bindPopup(busstop[i].name,{closeButton: false}).openPopup());
busstop.on('mouseout', function(){marker.closePopup());

};
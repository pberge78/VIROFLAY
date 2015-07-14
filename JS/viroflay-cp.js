// Example from leaflet main page

// create a map in the "map" div, set the view to a given place and zoom

//  --------------------------------------------------------------------------
//  | Auteur        | Version | Date       | Commentaires                    |
//  --------------------------------------------------------------------------
//  | P. BERGE      |  01.00  | 20/06/2014 | Markers cartes postales         |
//  |               |         |            |                                 |
//  --------------------------------------------------------------------------


	var CPIcon = L.icon({
    iconUrl: 'IMAGES/Map_marker_icon_Nicolas_Mollet_camera_White.png',
    iconRetinaUrl: 'IMAGES/Map_marker_icon_Nicolas_Mollet_camera_White.png',
    iconSize: [38, 38],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

// Rive droite
for ( var i=0; i < rd.length; ++i ) {
	var a = rd[i];
	var legende = a[2];
	var adresse = a[3];
	var popupContent =  '<p><iframe frameborder="0" scrolling="yes" width="500" height="400" src="' + adresse + '"></iframe><br/>'+ legende +'</p>';

//   markers,
   L.marker(new L.LatLng(a[0], a[1]), {icon: CPIcon}, {title: legende})
    	.addTo(map).bindPopup(popupContent,{
    				closeButton: true,
    				maxWidth: 1500,
    				minWidth: 400,
    				maxHeight: 1500,
    				minHeight: 400
    				});};

// Rive gauche
for ( var i=0; i < rg.length; ++i ) {
	var a = rg[i];
	var legende = a[2];
	var adresse = a[3];
	var popupContent =  '<p><iframe frameborder="0" scrolling="yes" width="500" height="400" src="' + adresse + '"></iframe><br/>'+ legende +'</p>';
//   markers,
   L.marker(new L.LatLng(a[0], a[1]), {icon: CPIcon}, {title: legende})
    	.addTo(map).bindPopup(popupContent,{
    				closeButton: true,
    				maxWidth: 1500,
    				minWidth: 400,
    				maxHeight: 1500,
    				minHeight: 400
    				});};


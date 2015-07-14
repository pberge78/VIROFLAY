// Example from leaflet main page

// create a map in the "map" div, set the view to a given place and zoom

//  --------------------------------------------------------------------------  
//  | Auteur        | Version | Date       | Commentaires                    |  
//  --------------------------------------------------------------------------  
//  | P. BERGE      |  01.00  | 20/06/2014 | Markers train and bus           |  
//  |               |         |            |                                 | 
//  --------------------------------------------------------------------------  


	var CPIcon = L.icon({
    iconUrl: 'IMAGES/Map_marker_icon_–_Nicolas_Mollet_–_camera_–_White.png',
    iconRetinaUrl: 'IMAGES/Map_marker_icon_–_Nicolas_Mollet_–_camera_–_White.png',
    iconSize: [32, 37],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

// Rive Gauche
	var regroup = L.markerClusterGroup();

	for ( var i=0; i < rg.length; ++i ) {
		var a = rg[i];
		var legende = a[2];
		var adresse = a[3];
		var popupContent =  '<p><iframe frameborder="0" scrolling="yes" width="500" height="400" src="' + adresse + '"></iframe><br/>'+ legende +'</p>';

//   markers, 
  		 var marker = L.marker(new L.LatLng(a[0], a[1]), {icon: CPIcon}, {title: legende})
    		.bindPopup(popupContent,{
    				closeButton: true,
    				maxWidth: 1500, 
    				minWidth: 400,
    				maxHeight: 1500,
    				minHeight: 400
    				});
		regroup.addLayer(marker);
   		};
   						
		map.addLayer(regroup);

// Rive Droite
	var regroup2 = L.markerClusterGroup();

	for ( var i=0; i < rd.length; ++i ) {
		var a = rd[i];
		var legende = a[2];
		var adresse = a[3];
		var popupContent =  '<p><iframe frameborder="0" scrolling="yes" width="500" height="400" src="' + adresse + '"></iframe><br/>'+ legende +'</p>';

//   markers, 
  		 var marker = L.marker(new L.LatLng(a[0], a[1]), {icon: CPIcon}, {title: legende})
    		.bindPopup(popupContent,{
    				closeButton: true,
    				maxWidth: 1500, 
    				minWidth: 400,
    				maxHeight: 1500,
    				minHeight: 400
    				});
		regroup.addLayer(marker);
   		};   						
		map.addLayer(regroup2);
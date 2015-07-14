// Example from leaflet main page

// create a map in the "map" div, set the view to a given place and zoom

//  --------------------------------------------------------------------------  
//  | Auteur        | Version | Date       | Commentaires                    |  
//  --------------------------------------------------------------------------  
//  | P. BERGE      |  01.00  | 11/07/2014 | single layer, landscape         |  
//  |               |         |            |                                 | 
//  --------------------------------------------------------------------------  
          
	var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
    	thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';
    	       
	var landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
    	thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;
    	
	var landMap = L.tileLayer(landUrl, {attribution: thunAttrib});
    	
//	var map = L.map('map', {
//	 	layers: [landMap] // only add one!
//		    })
//		    .setView([46.613071, 2.641955], 6);

//	L.control.layers(baseLayers).addTo(map);
// Example from leaflet main page

// create a map in the "map" div, set the view to a given place and zoom

//  --------------------------------------------------------------------------  
//  | Auteur        | Version | Date       | Commentaires                    |  
//  --------------------------------------------------------------------------  
//  | P. BERGE      |  01.00  | 20/06/2014 | Couches OSM, paysage et pastel  |  
//  |               |         |            | Recherche osmgeocoder           | 
//  --------------------------------------------------------------------------  
          
	var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
    	thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>',
    	stamenLink = '<a href="http://stamen.com">Stamen Design</a>';
        
	var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    	osmAttrib = '&copy; ' + osmLink + ' Contributors',
    	landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
    	thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink,
    	stamenUrl = 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
    	stamenAttrib = '&copy; '+osmLink+' Contributors & '+stamenLink;

	var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
    	landMap = L.tileLayer(landUrl, {attribution: thunAttrib}),
    	stamenMap = L.tileLayer(stamenUrl, {attribution: stamenAttrib});

	var map = L.map('map', {
	 	layers: [osmMap] // only add one!
		    })
		    .setView([46.613071, 2.641955], 6);

	var baseLayers = {
		"OSM Mapnik": osmMap,
		"Landscape": landMap,
		"Watercolor": stamenMap
		};

	L.control.layers(baseLayers).addTo(map);


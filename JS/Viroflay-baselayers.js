// Example from leaflet main page

// create a map in the "map" div, set the view to a given place and zoom

//  --------------------------------------------------------------------------
//  | Auteur        | Version | Date       | Commentaires                    |
//  --------------------------------------------------------------------------
//  | P. BERGE      |  01.00  | 20/06/2014 | Couches OSM, paysage et pastel  |
//  |               |         |            | et osmbuildings sketch          |
//  |               |         |            | Recherche osmgeocoder           |
//  --------------------------------------------------------------------------

	var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
      	osmbuildingsLink = '<a href="http://osmbuildings.org">osmbuildings</a>',
     	mapboxLink = '<a href="http://mapbox.com">MapBox</a>',
      	thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>',
    	stamenLink = '<a href="http://stamen.com">Stamen Design</a>';

	var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    	osmAttrib = '&copy; ' + osmLink + ' Contributors',
      	osmbuildingsUrl = 'http://{s}.tiles.mapbox.com/v3/osmbuildings.gm744p3p/{z}/{x}/{y}.png',
    	osmbuildingsAttrib = 'Map tiles &copy;' +mapboxLink,
    	landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
    	thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink,
    	stamenUrl = 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
    	stamenAttrib = '&copy; '+osmLink+' Contributors & '+stamenLink,
    	stamen2Url = 'http://{s}.tile.stamen.com/toner-hybrid/{z}/{x}/{y}.png';
    	
	var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
    	landMap = L.tileLayer(landUrl, {attribution: thunAttrib}),
    	stamenMap = L.tileLayer(stamenUrl, {attribution: stamenAttrib}),
    	stamen2Map = L.tileLayer(stamen2Url, {attribution: stamenAttrib}),
    	osmbuildingsMap = L.tileLayer(osmbuildingsUrl, {attribution: osmbuildingsAttrib});

	var map = L.map('map', {
	 	layers: [osmMap] // only add one!
		    })
		    .setView([48.8, 2.1667], 14);

	var baseLayers = {
		"OSM Mapnik": osmMap,
    	"OsmBuildings": osmbuildingsMap,
		"Landscape": landMap,
		"Watercolor": stamenMap,
		"Toner-hybrid": stamen2Map
		};

	L.control.layers(baseLayers).addTo(map);

    var osmb = new OSMBuildings(map).loadData();

 	var osmGeocoder = new L.Control.OSMGeocoder();
        map.addControl(osmGeocoder);

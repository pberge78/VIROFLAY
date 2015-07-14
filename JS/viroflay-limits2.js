
// Limites administratives de Viroflay dessinees sur MapBox le 22 Juin 2014
// L.polygon([limits]).addTo(map).bindPopup("Limites administratives de Viroflay");

//  Construction of map marker view for each feature 
	var viroflaylimits;
		viroflaylimits = L.geoJson(limits, {
			pointToLayer: function (feature, latlng) {
	            return L.marker(latlng, {},
			onEachFeature: function (feature, layer) {
					var popupContent = 'Limites administratives de Viroflay';
		        	layer.bindPopup(popupContent);
		    }
		});
		
   		 map.addLayer(viroflaylimits);



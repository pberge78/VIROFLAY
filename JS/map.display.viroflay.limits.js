
		var geojson;


		function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
		}

		function onEachFeature(feature, layer) {
			if (feature.properties) {
				var popupContent = '<b>'+ feature.properties.title +'</b>';
            	layer.bindPopup(popupContent);
          	}
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				click: zoomToFeature
			});
		}
// Map display
		geojson = L.geoJson(limits, {
			onEachFeature: onEachFeature
		}).addTo(map);

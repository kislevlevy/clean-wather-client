'use-strict';

// Set map:
let map = L.map('map').setView([34, 22], 3);

// Set tile for map:
L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}',
  {
    minZoom: 0,
    maxZoom: 20,
    api_key: 'd18ccb7d-7d96-4ff1-b1f7-bdcd1d40c9eb',
    ext: 'jpg',
  }
).addTo(map);

// Remove desired attributes from map:
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.leaflet-control-zoom').style.display = 'none';
  document.querySelector('.leaflet-control-attribution').style.display = 'none';
});

// Export move map function:
export const moveMap = function (coordinates, zoom = 7) {
  map.flyTo(coordinates, zoom, {
    animate: true,
    duration: 1.5,
  });
};

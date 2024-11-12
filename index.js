// Initialize and add the map
let map;
let startcords = null;
let endcords = null;
let currentselection = null;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
	backgroundColor: "black",
	cameraControl: false,
    mapId: "DEMO_MAP_ID",
  });
  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.position);
    }, 3000);
  });
  map.addListener("click", (e) => {
	const clickedLat = e.latLng.lat();
	const clickedLng = e.latLng.lng();

	start = clickedLat.toFixed(6);
    document.getElementById("coordinates").innerText = `Lat: ${clickedLat.toFixed(6)} \n Lng ${clickedLng.toFixed(6)}`;
});
  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
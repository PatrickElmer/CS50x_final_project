async function getCoordinates() {
  const response = await fetch("json/language_coordinates.json");
  return await response.json();
}

async function makeMap() {
  const mymap = L.map("mapid").setView([27.830005, 127.168415], 6);

  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(mymap);

  const points = await getCoordinates();

  const mapIcon = L.divIcon({
    className: "mapIcon",
    iconSize: [8, 8],
    iconAnchor: [4, 4],
  });

  points.forEach((e) => {
    const marker = L.marker([e.lat, e.lon], { icon: mapIcon }).addTo(mymap);
    marker
      .bindTooltip(`<p>${e.name}</p>`, {
        permanent: true,
        direction: e.pos,
        opacity: 0.8,
      })
      .openTooltip();
  });
}

makeMap();

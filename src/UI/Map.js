import L from 'leaflet'

export class Map {
    constructor(coordinates) {
        this.render(coordinates);
    }

    render(coordinates) {
        const map = L.map("map").setView(coordinates, 13);
        L.tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1IjoicmVjYmxlIiwiYSI6ImNrZWtmMnlzeTBkbHQydGs3emZlazZscHcifQ.egjBgb64rtfGTg9ZgfuoEQ"
          }
        ).addTo(map);
        L.marker(coordinates).addTo(map);
      }
}
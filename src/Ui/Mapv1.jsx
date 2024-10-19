import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Time from "./Time";
import { useEffect } from "react";

const position = [31.3223714, 75.4910179];

function LocationMarker() {
  const map = useMap();

  useEffect(
    function () {
      const timeOut = setTimeout(function () {
        map.flyTo(position, 9, [0, 0]);
      }, 2500);

      return () => clearTimeout(timeOut);
    },
    [map],
  );

  return <Marker position={position}></Marker>;
}

function Map() {
  return (
    <section className="relative top-0 h-32 sm:h-52">
      <Time />

      <div
        className="absolute z-[999] h-full w-full bg-gradient-to-b from-zinc-500/5 via-zinc-900/20
          to-zinc-900"
      ></div>
      <MapContainer
        center={{ lat: 20.2376, lng: 84.27 }}
        zoom={1}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=iBJOifLBqi48Gh8nrpxVHLH81yHz05fMVp4CZPu4DYsBJxs7M0mc6BSzQ1RZAv0P"
        />
        <LocationMarker />
      </MapContainer>
    </section>
  );
}

export default Map;
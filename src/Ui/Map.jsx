import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Time from "./Time";
import { icon } from "leaflet";
const position = [12.961, 77.6387];

const ICON = icon({
  iconUrl: "./marker.png",
  iconSize: [18, 30],
});

function LocationMarker() {
  return <Marker position={position} icon={ICON} />;
}

function Map() {
  return (
    <section className="relative top-0 h-32 sm:h-52">
      <Time />
      <div
        className="absolute z-[999] h-full w-full bg-gradient-to-b from-zinc-500/5 via-zinc-900/20
          to-zinc-900"
      ></div>
      <img
        src="./icons/india.svg"
        alt="Indian flag"
        className="absolute right-2 top-2.5 z-[999] h-4"
      />
      <MapContainer
        center={{ lat: 20.2376, lng: 84.27 }}
        zoom={1}
        scrollWheelZoom={false}
        className="h-full w-full"
        whenReady={(mapInstance) => {
          setTimeout(() => {
            mapInstance.target.flyTo(position, 9, {
              animate: true,
              duration: 4,
            });
          }, 3000);
        }}
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

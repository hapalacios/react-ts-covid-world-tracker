import React from "react";
//import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.scss";
import { showDataOnMap } from "../util/util";

//function Map({ countries, casesType, center, zoom }) {
export default function Map( { countries, casesType, center, zoom }: any ) {
 return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}
import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
//import { divIcon } from "leaflet";
//import { utilProps } from "./model";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

// type utilProps = {
//   data: any
// };

export const sortData = (data: any) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat: any) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data: any, casesType = "cases") =>
  data.map((country: any) => (
        <Circle 
          center={[country.countryInfo.lat, country.countryInfo.long]}
          color={casesTypeColors["cases"].hex}
          fillColor={casesTypeColors["cases"].hex}
          fillOpacity={0.4}
          radius={ Math.sqrt(country[casesType]) * casesTypeColors["cases"].multiplier}
        >
          <Popup>
            <div className="info-container">
              <div
                className="info-flag"
                style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
              ></div>
              <div className="info-name">{country.country}</div>
              <div className="info-confirmed">
                Cases: {numeral(country.cases).format("0,0")}
              </div>
              <div className="info-recovered">
                Recovered: {numeral(country.recovered).format("0,0")}
              </div>
              <div className="info-deaths">
                Deaths: {numeral(country.deaths).format("0,0")}
              </div>
            </div>
          </Popup>
        </Circle>
  ));

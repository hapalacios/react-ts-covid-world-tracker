import React from "react";
import "./Table.scss";
import numeral from "numeral";

export default function Table( { countries } : any ) {
  return (
    <div className="table">
      {countries.map((country: any) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}
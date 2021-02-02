import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.scss";
//import { InfoBoxProps } from "./model";

//function InfoBox({ title: string, cases: number, total: number, active : any, isRed: boolean, ...props: any }) {
//function InfoBox({ title, cases, total, active, isRed, ...props }) {
//export const InfoBox({ title, cases, total, active, isRed, ...props}) = () =>  {

//export const NominationList: React.FC<NominationListProps> = (props) => {

export default function InfoBox ( { title, cases, total, active, isRed, ...props } : any )  {
  console.log(title, active);
  return (
    
    <Card
      onClick={props.onClick}
      //onClick={(e: any) => e.props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
    
  );
}
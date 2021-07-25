import React from 'react'
import { Checkboxes } from 'mui-rff';
import Grid from '@material-ui/core/Grid';

/*
import SchemaValidator from "../../Utils/SchemaValidator"
const textFieldSchema = {
    title: "TextField",
    type: "object",
    properties: {
      type: { type: "string" },
      label: { ar: {type: "string"}, en: {type: "string"} },
      name: { type: "string" },
      required: { type: "boolean" },
      //size: { type: "integer" }
    },
    required: ["type", "label"]
  };*/
export default function CheckboxInput(props) {
  //SchemaValidator(textFieldSchema, props);

  let size = !!props.size?props.size:12;
  return (
    <Grid item xs={size} className={props.style}>
      <Checkboxes
        name={props.name}
        required={props.required}
        data={{ label: props.tLabel, value: true }}
      />
    </Grid>

  )
}
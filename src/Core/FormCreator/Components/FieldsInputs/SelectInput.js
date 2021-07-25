import React from 'react'
import { Select } from 'mui-rff';
import { MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box'

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
export default function SelectInput(props) {
    //SchemaValidator(textFieldSchema, props);
    const [t] = useTranslation('common');

    let options = [];
    let tOptionLabel = '';

    props.options.forEach(option => {
        tOptionLabel = t('lang') === 'en' ? option.label.en : option.label.ar;
        options.push({ label: tOptionLabel, value: option.value })
    });
    let size = !!props.size ? props.size : 12;

    return (
        <Grid item xs={size} className={props.style}>
            <Box m={2} >
                <InputLabel htmlFor={props.name}>{props.tLabel}</InputLabel>
                <Select
                    className={props.style}
                    name={props.name}
                    required={props.required}
                    margin={"dense"}

                >
                    {options.map((option, idx) => {
                        return <MenuItem value={option.value} className={props.style} key={idx}>{option.label}</MenuItem>
                    })}
                </Select>
            </Box>
        </Grid>
    )
}
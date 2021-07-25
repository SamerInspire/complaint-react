import React from 'react'
import { Radios } from 'mui-rff';
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
export default function RadioInput(props) {
  //SchemaValidator(textFieldSchema, props);
  const inputData = props.fieldData;
  const [t] = useTranslation('common');

  let options = [];
  let tOptionLabel = '';

  inputData.options.forEach((option,idx) => {
    tOptionLabel = t('lang') === 'en' ? option.label.en : option.label.ar;
    options.push({ label: tOptionLabel, value: option.value, key:idx })
  });

  let size = !!inputData.size ? inputData.size : true;
  return (
    <Grid item xs={size} className={inputData.style} >
      <Box m={2} >
        <Radios
          label={inputData.tLabel}
          name={inputData.name}
          required={inputData.required}
          data={options}
        />
      </Box>
    </Grid>
  );
}
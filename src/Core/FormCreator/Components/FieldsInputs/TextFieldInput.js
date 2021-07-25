import React from 'react'
import { useStyles } from '../../../../styles.js'
import { TextField } from 'mui-rff';
import Grid from '@material-ui/core/Grid';
import SchemaValidator from "../../../Utils/SchemaValidator"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

/* const textFieldSchema = {
  title: "TextField",
  type: "object",
  properties: {
    type: { type: "string" },
    label: {
      type: "object"
      //ar: {type: "string"}, en: {type: "string"}
    },
    name: { type: "string" },
    required: { type: "boolean" },
    //size: { type: "integer" }
  },
  required: ["type", "label"]
}; */
export default function TextFieldInput(props) {
  const classes = useStyles();
  console.log('props',props)
  //let validatorResult = SchemaValidator(textFieldSchema, props);

  // if (validatorResult.valid) {

    let size = !!props.size ? props.size : 12;

    return (
      <Grid item xs={size} >
        <Box m={2} >
          <TextField
            InputLabelProps={{ classes: { root: props.labelRootStyle } }} //, shrink: props.labelShrinkStyle 
            label={props.tLabel}
            className={props.style}
            name={props.name}
            required={props.required}
            type={props.type}
            multiline={props.multiline}
            rows={props.rows}
          />
        </Box>
      </Grid>);
 /*  } else {
    return (
      <Grid item xs={10} >
        <Typography className={classes.errorLabel} component="h3">
          {'input Name : ' + props.name + ', input Type: ' + props.type + ', Description' + validatorResult.desc}
        </Typography>
      </Grid>
    );
  } */

}
import React from 'react'
import { MenuItem } from '@material-ui/core';
import { Field } from 'react-final-form';
import {
    Grid,
    FormControlLabel,
    RadioGroup,
    Typography,
  } from '@material-ui/core';
  import { TextField as TextFieldFinal, Radio } from 'final-form-material-ui';

export default function RadioButtonField(props) {
    console.log('props ===> ', props)
    let options = [];
    let tOptionLabel = '';
    if (!!props.fieldLookUp) {
        props.fieldLookUp.forEach(option => {
            tOptionLabel = option.label.ar;
            options.push({ label: tOptionLabel, value: option.value })
        })
    } else {
        props.options.forEach(option => {
            //tOptionLabel = t('lang') === 'en' ? option.label.en : option.label.ar;
            tOptionLabel = option.label.ar;
            options.push({ label: tOptionLabel, value: option.value })
        });
    }
    let gridSize = !!props.gridSize ? props.gridSize : 12;
    return (
        <Grid
        item
        md={6}
        xs={gridSize}
        className="custom-label-field"
      >
        <Typography> {props.label}</Typography>
        <RadioGroup row >
          {options.forEach(option => (
            <FormControlLabel
              label={option.tOptionLabel}
              control={<Field
                name={option.name}
                component={Radio} type="radio" value={option.value}/>}
            />
          ))}
        </RadioGroup>
      </Grid>
    )
}
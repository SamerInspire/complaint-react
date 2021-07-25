import React from 'react'
import { Field } from 'react-final-form';
import {
    Grid,
    FormControlLabel,
    RadioGroup,
    Typography,
  } from '@material-ui/core';
  import { Radio } from 'final-form-material-ui';
  import PropTypes from 'prop-types'

export default function RadioButtonField(props) {
    let options = [];
    let tOptionLabel = '';
    if (!!props.fieldLookUp) {
        props.fieldLookUp.forEach(option => {
            tOptionLabel = option['name'];
            options.push({ label: tOptionLabel, value: option.ID })
        })
    } else {
        props.options.forEach(option => {
            //tOptionLabel = t('lang') === 'en' ? option.label.en : option.label.ar;
            tOptionLabel = option.label.ar;
            options.push({ name: tOptionLabel, value: option.value })
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
        <Typography> {props.tLabel}</Typography>
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
RadioButtonField.propTypes = {
  options: PropTypes.object,
  tLabel: PropTypes.string,
  gridSize: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string,
  fieldLookUp: PropTypes.object,
}
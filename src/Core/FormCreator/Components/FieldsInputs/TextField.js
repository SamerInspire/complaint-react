import React from 'react'
import {Grid,  Box, TextField as TextFieldCore} from '@material-ui/core';
import { TextField as TextFieldFinal } from 'final-form-material-ui';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types'

export default function TextField(props) {
    const gridSize = !!props.gridSize ? props.gridSize : 12

    if (props.type !== 'date') {
        return (
            <Grid item xs={gridSize} >
                <Field
                    fullWidth
                    required={props.required}
                    label={props.tLabel}
                    name={props.name}
                    component={TextFieldFinal}
                    type={props.fieldType}
                    variant="outlined"
                    dir="rtl"
                    className="custom-field"
                />
            </Grid>);
    } else {
        return (
            <>
                <Grid container md={6} xs={gridSize} spacing={1}>
                    <Grid item >
                        <TextFieldCore
                            fullWidth
                            InputLabelProps={{ classes: { root: props.labelRootStyle }, shrink: true }} //, shrink: props.labelShrinkStyle 
                            label={'من : '}
                            name='from'
                            type={props.type}
                            value={props.value}
                            onChange={props.handleChange}
                            variant="outlined"
                            dir="rtl"
                            multiline={props.multiline}
                            rows={props.rows}
                            disabled={props.disabled}
                        />
                    </Grid>
                    <Grid item>
                        <TextFieldCore
                            fullWidth
                            InputLabelProps={{ classes: { root: props.labelRootStyle }, shrink: true }} //, shrink: props.labelShrinkStyle 
                            label={'الى : '}
                            name='to'
                            type={props.type}
                            value={props.value}
                            onChange={props.handleChange}
                            variant="outlined"
                            dir="rtl"
                            multiline={props.multiline}
                            rows={props.rows}
                            disabled={props.disabled}
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
}
TextField.propTypes = {
  labelRootStyle: PropTypes.object,
  tLabel: PropTypes.string,
  handleChange: PropTypes.func,
  gridSize: PropTypes.number,
  rows: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
}
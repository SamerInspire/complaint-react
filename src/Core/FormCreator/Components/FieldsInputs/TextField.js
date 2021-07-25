import React from 'react'
import Grid from '@material-ui/core/Grid';
import { TextField as TextFieldFinal } from 'final-form-material-ui';
import { Field } from 'react-final-form';

export default function TextFieldInput(props) {
    console.log('props', props)
    let gridSize = !!props.gridSize ? props.gridSize : 12;

    if (props.type !== 'date') {
        return (
            <Grid item xs={gridSize} >
                <Field
                    fullWidth
                    required
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
                        <TextFieldFinal
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
                        <TextFieldFinal
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
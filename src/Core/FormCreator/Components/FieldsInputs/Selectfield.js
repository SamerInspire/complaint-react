import React from 'react'
import { Select } from 'final-form-material-ui';
import { MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
//import { useTranslation } from 'react-i18next';
import { Field } from 'react-final-form';

export default function SelectInput(props) {
    //const [t] = useTranslation('common');
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
            <Field
                fullWidth
                label={props.tLabel}
                name={props.name}
                component={Select}
                required={props.required}
                dir="rtl"
                variant="outlined"
                className="custom-field"
                formControlProps={{ fullWidth: true }}
            >
                {options.map((option, idx) => {
                    return <MenuItem value={option.value} className={props.style} key={idx}>{option.label}</MenuItem>
                })}
            </Field>
        </Grid>
    )
}
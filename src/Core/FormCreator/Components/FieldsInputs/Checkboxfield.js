import { Field } from 'react-final-form';
import {
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
import { Checkbox } from 'final-form-material-ui';

export default function CheckboxField(props) {

    return (
        <Field name={props.name} mt={3}>
            {({ meta }) => ( // eslint-disable-line no-unused-vars
                <FormControl component="fieldset" error={meta.error} required>
                    <FormControlLabel
                        label={props.tLabel}
                        control={
                            <Field
                                name={props.name}
                                component={Checkbox}
                                type="checkbox"
                                value={!!props.values[props.value][0]}
                                onClick={() => {
                                   // props.setField("agree", props.values.agree ? [] : [true]);
                                }}
                            />
                        }
                    />
                </FormControl>
            )}
        </Field>)
}
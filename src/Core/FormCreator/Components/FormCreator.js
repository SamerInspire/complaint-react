import React, { useState } from 'react'
import FieldsCreator from "./FieldsCreator"
import { Form } from 'react-final-form'
import ButtonField from './FieldsInputs/ButtonField'
//import { useTranslation } from 'react-i18next'
import TypographyField from './FieldsInputs/TypographyField'
import FieldsValidator from '../Utils/FieldsValidator'
import { Grid, Box } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import PropTypes from 'prop-types'

export default function FormCreator({ title, pageName, isLoading, submitInfo, schema, initValues, sectionNames, cancel, lookupObject, additionalFields, fieldsName, values, errMessage }) {
    //const [t] = useTranslation('common')
    const [loading, setLoading] = useState(false)
    const setField = (fieldName, fieldValue) => setField(fieldName, fieldValue)
    const handleSubmit = async values => {
        setLoading(true)
        if(!!handleSubmit)
         await submitInfo.onSubmit(values)
        setLoading(false)
    }
    return (
        <Box style={{ pointerEvents: loading ? "none" : '' }}>
            {<Form
                name={pageName}
                onSubmit={handleSubmit}
                validate={values => {
                    return FieldsValidator({ schema, values })
                }}
                initialValues={initValues}

                render={({ handleSubmit, values }) => (

                    <form onSubmit={handleSubmit}>
                        <TypographyField textTitle={title} />
                        <Grid
                            container
                            spacing={3}
                            mt={3}
                            mb={3}
                        >
                            {FieldsCreator({ schema, fieldsName, sectionNames, lookupObject, values, isLoading, setField })}
                        </Grid>
                        {!!submitInfo ? <Box m={2} >
                            <ButtonField btnName={submitInfo.btnName} loading={loading} />
                            {additionalFields}
                        </Box>
                            : ''
                        }

                    </form>

                )}
            />
            }
            {errMessage && (
                <Alert variant="outlined" severity="error">
                    {errMessage}
                </Alert>)
            }
        </Box>

    )
}
FormCreator.propTypes = {
    values: PropTypes.object,
    pageName: PropTypes.string,
    title: PropTypes.string,
    submitInfo: PropTypes.object,
    schema: PropTypes.object,
    initValues: PropTypes.object,
    sectionNames: PropTypes.object,
    cancel: PropTypes.object,
    lookupObject: PropTypes.object,
    additionalFields: PropTypes.object,
    fieldsName: PropTypes.object,
    errMessage: PropTypes.string,
    isLoading: PropTypes.bool,
}
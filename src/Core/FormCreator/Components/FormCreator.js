import React, { useState } from 'react'
import CreatNewSchema from "./CreatNewSchema"
import { useStyles } from '../../../styles.js'
import { Form } from 'react-final-form'
import Box from '@material-ui/core/Box'
import ButtonField from './FieldsInputs/ButtonField'
import { useTranslation } from 'react-i18next'
import TypographyField from './FieldsInputs/TypographyField'
import fieldsValidator from '../Utils/FieldsValidator'

export default function FormCreator({ title, pageName, submitInfo, schema, initValues, sectionNames, cancel, lookupObject, additionalFields, mainClass, fieldsName }) {
    const classes = useStyles()
    mainClass = !!mainClass ? mainClass : classes.regForm
    const [t] = useTranslation('common')
    const [loading, setLoading] = useState(false)
    const setField = (fieldName, fieldValue) => setField(fieldName, fieldValue)
    const handleSubmit = async values => {
        setLoading(true)
        await submitInfo.onSubmit(values)
        values.password = ''
        setLoading(false)
    }
    schema = !!pageName ? schema.filter(field => field.fieldFor.includes(pageName)) : schema
    console.log('sectionNames ', sectionNames)
    return (
        <Box className={mainClass} style={{ pointerEvents: loading ? "none" : '' }}>
            <Form
                name={pageName}
                onSubmit={handleSubmit}
                validate={values => {
                    return fieldsValidator(schema, values, t)
                }}
                initialValues={{ 'agree': false }}

                render={({ handleSubmit, values }) => (

                    <form onSubmit={handleSubmit} className={classes.innerForm}>
                        <TypographyField TypographyStyle={classes.subtitleStyle} textTitle={title} />
                        {CreatNewSchema({ schema, fieldsName, sectionNames, lookupObject, values, setField })}
                        <Box m={2} className={classes.subtitleDiv}>
                            <ButtonField btnName={t(submitInfo.btnName)} btnStyle={classes.blueBtn} loading={loading} />
                            {additionalFields}
                        </Box>

                    </form>

                )}
            /></Box>)
}

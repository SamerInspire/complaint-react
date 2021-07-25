import TextField from './FieldsInputs/TextField'
import RadioButtonField from './FieldsInputs/RadioButtonField'
import CheckboxField from './FieldsInputs/CheckboxField'
import SelectField from './FieldsInputs/SelectField'
import ButtonField from './FieldsInputs/ButtonField'
import TypographyField from './FieldsInputs/TypographyField'
import PropTypes from 'prop-types'
//import { useTranslation } from 'react-i18next'
//import { useStyles } from '../../../styles.js'

export default function FieldsCreator({ lookupObject, schema, fieldsName, values, setField, isLoading, sectionNames }) {
    //const [t] = useTranslation('common')
    //const classes = useStyles()

    let tLabel = '', style = '', labelRootStyle = '', labelshrinkStyle = ''
    let finalSchema = []
    const Components = { TextField, RadioButtonField, CheckboxField, SelectField, ButtonField, TypographyField }
    let newSchema = []
    if (!!sectionNames) {
        sectionNames.map(secName => (
            newSchema = schema.filter(field => field.sectionName === secName)
        ))
        schema = newSchema
    }
    newSchema = []
    if (!!fieldsName) {
        fieldsName.map(fieldName => (
            newSchema = [...newSchema, schema.filter(field => field.name === fieldName)[0]]
        ))
        schema = newSchema
    }

    schema.forEach(field => {
        if (!!field) {
            //if (t('lang') === 'ar') { // setting the properities for lang change
            tLabel = field.label.ar
            //style = classes.inputStyleAr
            //labelRootStyle = classes.labelRootAr
            //labelshrinkStyle = classes.shrinkAr
            /*} else {
                tLabel = field.label.en
                style = classes.inputStyleEn
                labelRootStyle = classes.labelRootEn
                labelshrinkStyle = classes.shrinkEn
            }*/
            const fieldLookUp = !!lookupObject ? lookupObject[field['name']] : ''
            field = { ...field, fieldLookUp, tLabel, style, labelRootStyle, labelshrinkStyle, values, setField, isLoading }
            let Component = []
            Component = Components[field['type']]
            !!Component ? finalSchema.push(<Component {...field} />) : finalSchema.push(<TypographyField textTitle={'input type not recognized! ' + field['name'] + ' with type ' + field['type']} />)

        }
    })

    return (
        finalSchema
    )

}
FieldsCreator.propTypes = {
    labelRootStyle: PropTypes.object,
    tLabel: PropTypes.string,
    handleChange: PropTypes.func,
    gridSize: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    multiline: PropTypes.bool,
    isLoading: PropTypes.bool,
}
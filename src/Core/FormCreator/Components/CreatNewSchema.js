import TextFieldInput from './FieldsInputs/TextFieldInput'
import TextField from './FieldsInputs/TextField'
import RadioInput from './FieldsInputs/RadioInput'
import RadioButtonField from './FieldsInputs/RadioButtonfield'
import CheckboxInput from './FieldsInputs/CheckboxInput'
import Checkboxfield from './FieldsInputs/Checkboxfield'
import SelectInput from './FieldsInputs/SelectInput'
import Selectfield from './FieldsInputs/Selectfield'
import { useTranslation } from 'react-i18next'
import { useStyles } from '../../../styles.js'

export default function CreatNewSchema({ lookupObject, schema, fieldsName, values, setField, sectionNames, lookUpData }) {
    const [t] = useTranslation('common')
    const classes = useStyles()

    let tLabel = '', style = '', labelRootStyle = '', labelshrinkStyle = ''
    console.log('schema ', schema)
    let finalSchema = []
    const Components = { TextFieldInput, RadioInput, CheckboxInput, SelectInput, Checkboxfield, Selectfield, RadioButtonField, TextField }
    let newSchema = []
    if (!!sectionNames) {
        sectionNames.map(secName => {
            newSchema = schema.filter(field => field.sectionName === secName)
        })
        schema = newSchema
    }
    newSchema = []
    if (!!fieldsName) {
        fieldsName.map(fieldName => {
            newSchema = [...newSchema, schema.filter(field => field.name === fieldName)[0]]
        })
        schema = newSchema
    }

    console.log('schema after', schema)

    schema.forEach(field => {
        console.log(field)
        if (!!field) {
            //if (t('lang') === 'ar') { // setting the properities for lang change
                tLabel = field.label.ar
                style = classes.inputStyleAr
                labelRootStyle = classes.labelRootAr
                labelshrinkStyle = classes.shrinkAr
            /*} else {
                tLabel = field.label.en
                style = classes.inputStyleEn
                labelRootStyle = classes.labelRootEn
                labelshrinkStyle = classes.shrinkEn
            }*/
            const fieldLookUp = lookupObject[field.name]
            field = { ...field, fieldLookUp, tLabel, style, labelRootStyle, labelshrinkStyle, values, setField }
            let Component = []
            Component = Components[field['type']]
            finalSchema.push(<Component {...field} />)
            console.log('finalSchema ', finalSchema)
        }
    })

    return (
        finalSchema
    )

}
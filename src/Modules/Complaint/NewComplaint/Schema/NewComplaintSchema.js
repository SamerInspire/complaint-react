import { useState } from "react"
import CreatNewSchema from "../../../../Core/FormCreator/Components/CreatNewSchema"

export default function SignInSchema() {

    const [schemaFields] = useState([
        {
            inputType: 'Select',
            label: { ar: 'نوع الشكوى', en: 'Complaint Type' },
            name: 'complaintType',
            required: true,
            options: [
                { label: { ar: 'النوع الأول', en: 'Type1' }, value: 'Type1' },
                { label: { ar: 'النوع الثاني', en: 'Type2' }, value: 'Type2' },
                { label: { ar: 'النوع الثالث', en: 'Type3' }, value: 'Type3' }
            ]
        },
        {
            inputType: 'TextField',
            type: 'text',
            label: { ar: 'الموضوع', en: 'Subject' },
            name: 'subject',
            required: true
        },
        {
            inputType: 'Select',
            label: { ar: 'نوع الشكوى', en: 'Severity' },
            name: 'severity',
            required: true,
            options: [
                { label: { ar: 'قليل', en: 'Low' }, value: 'Low' },
                { label: { ar: 'متوسط', en: 'Medium' }, value: 'Medium' },
                { label: { ar: 'عالي', en: 'High' }, value: 'High' },
                { label: { ar: 'فائق', en: 'Extreme' }, value: 'Extreme' }
            ]
        },
        {
            inputType: 'TextField',
            type: 'textArea',
            label: { ar: 'الوصف', en: 'Description' },
            name: 'description',
            multiline: "true",
            rows: "4",
            required: true
        },
        {
            inputType: 'Radio',
            label: { ar: 'لغة الاتصال المفضلة', en: 'Preferred Contact Language' },
            name: 'preferedLanguage',
            required: true,
            options: [
                { label: { ar: 'العربية', en: 'Arabic' }, value: 'Arabic' },
                { label: { ar: 'الإنجليزية', en: 'English' }, value: 'English' }
            ]
        },
        {
            inputType: 'Checkbox',
            label: { ar: 'أوافق على التعليمات والشروط', en: 'Agree to terms conditions' },
            name: 'agreeValidation',
            required: true,
        }]
    )
    return CreatNewSchema(schemaFields)
}
import { useState } from "react"
import { useStyles } from '../../../../styles.js'
import { useLocation } from "react-router-dom"
import { useUpdateAlert } from "../../../../Core/Context/AlertContext"
import AxiosHit from "../../../../Core/API/AxiosHit"
import schema from "../Schema/SignupSchema"
import { useTranslation } from 'react-i18next'
import FormCreator from '../../../../Core/FormCreator/Components/FormCreator'
import { useUpdateLoginInfo } from '../../../../Core/Context/LoginInfoContext'
import { HandelRegularHit } from '../../../../Core/Utils/HitHandiling'

export default function SignUp() {
    const pageName = useLocation().state.PName
    const [t] = useTranslation('common')
    const classes = useStyles()
    const setAlertInfo = useUpdateAlert()
    const [initValues] = useState(pageName === 'signup' ? { education: 'High School', gender: 'Male' } : '')
    const loginUpdate = useUpdateLoginInfo()
    const title = pageName === 'signup' ? t('signup_page.user_reg_header_title') : t('signup_page.admin_reg_header_title')
    const mainClass = classes.regForm
    const onSubmit = async values => {
        let hitResult = await AxiosHit({
            method: "post", url: "users/" + pageName, data: {
                email: values.email,
                password: values.password,
                name: values.name,
                education: values.education,
                phoneNumber: values.phoneNumber,
                gender: values.gender,
                address: values.address
            }
        })
        HandelRegularHit(hitResult, values, setAlertInfo, loginUpdate)
    }
    const [submitInfo] = useState({ btnName: 'signup_page.register_btn', onSubmit: onSubmit })


    return (
        FormCreator(
            {
                title,
                pageName,
                submitInfo, // Submit info object - contains button name and the onsubmit function
                schema, // Schema to Draw
                initValues, // initial Values
                mainClass
            }
        ))
}

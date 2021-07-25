import React, { useState } from "react"
import { useTranslation } from 'react-i18next'
import AxiosHit from "../../../../Core/API/AxiosHit"
import schema from "../Schema/schemaTest"
import FormCreator from '../../../../Core/FormCreator/Components/FormCreator'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Link } from "react-router-dom"
import { useStyles } from '../../../../styles.js'
import { useUpdateLoginInfo } from '../../../../Core/Context/LoginInfoContext'
import { useUpdateAlert } from "../../../../Core/Context/AlertContext"
import { HandelRegularHit } from '../../../../Core/Utils/HitHandiling'

export default function SignIn() {
  const classes = useStyles()
  const [t] = useTranslation('common')
  const setAlertInfo = useUpdateAlert()
  const loginUpdate = useUpdateLoginInfo()
  const title = t('login_page.header_title')
  const mainClass = classes.innerGrid
  const sectionNames = ['CenterDetails',]
  const lookupObject =
  {
    "CRNumber":
      [
        {
          label: {
            en: 'High School',
            ar: 'الشهادة الثانوية'
          },
          value: 'High School'
        },
        {
          label: {
            en: 'Bachelore degree',
            ar: 'درجة البكالورياس'
          },
          value: 'Bachelore degree'
        },
        {
          label: {
            en: 'Master Dgree(M.D)',
            ar: 'درجة الماستر'
          },
          value: 'Master Dgree(M.D)'
        }
      ]
  }
  const onSubmit = async values => {
    let hitResult = await AxiosHit({
      method: "post", url: "users/signin", data: {
        email: values.email,
        password: values.password
      }
    })

    HandelRegularHit(hitResult, setAlertInfo, loginUpdate, values)
  }

  const [submitInfo] = useState({ btnName: 'login_page.login_btn', onSubmit: onSubmit })

  const additionalFields =
    (
      <Typography className={classes.root}>
        <Box m={1}>
          {t('login_page.not_registered_label')}&nbsp;
          <Link to={{ pathname: "/signup", state: { 'PName': 'signup' } }} >
            {t('login_page.create_user_acc_label')}
          </Link>
        </Box>
        <Link to={{ pathname: "/signup", state: { 'PName': 'signupforadmin' } }}  >
          {t('login_page.create_admin_acc_label')}
        </Link>
      </Typography>
    )

  return (FormCreator({ title, submitInfo, schema, additionalFields, mainClass, sectionNames, lookupObject }))

}


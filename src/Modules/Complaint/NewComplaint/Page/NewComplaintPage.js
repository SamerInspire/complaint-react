import React from "react"
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../../../../styles.js'
import { Form } from 'react-final-form'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { useUpdateAlert } from "../../../../Core/Context/AlertContext"
import AxiosHit from "../../../../Core/API/AxiosHit"
import NewComplaintSchema from "../Schema/NewComplaintSchema"

export default function NewComplaint() {
    const classes = useStyles()
    const setAlertInfo = useUpdateAlert()

    const onSubmit = async values => {
        let hitResult = await AxiosHit({
            method: "post", url: "complaints", data: {
                complaintType: values.complaintType,
                subject: values.subject,
                severity: values.severity,
                description: values.description,
                preferedLanguage: values.preferedLanguage,
            }
        })
        if (!hitResult.success) {
            setAlertInfo({ alertType: hitResult.result, alertMsg: hitResult.description, redirectTo: hitResult.redirectTo })
        } else {
            setAlertInfo({ alertType: 'success', alertMsg: 'Successfully created', redirectTo: '/' })
        }
    }
    const validate = values => {
        const errors = {}

        if (!values.subject) {
            errors.subject = 'Required'
        }
        if (!values.description) {
            errors.description = 'Required'
        }
        if (!values.agreeValidation) {
            errors.agreeValidation = 'Required'
        }
        return errors
    }
    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
                <Form
                    onSubmit={onSubmit}
                    initialValues={{ complaintType: 'Type1', severity: 'Low', preferedLanguage: 'Arabic' }}
                    validate={validate}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit} noValidate className={classes.regForm} >
                            <div className={classes.subtitleDiv}>
                                <Typography className={classes.subtitleStyle} component="h3">
                                    Create Complaint
                                </Typography>
                            </div>
                            <Divider variant="middle" style={{ height: '5px' }} />
                            <br />
                            <Grid container alignItems="flex-start" spacing={1}>
                                <NewComplaintSchema />
                                <Grid item style={{ marginTop: 16, width: "100%" }}>
                                    <div className={classes.subtitleDiv}>
                                        <button type="submit" className={classes.regestBtn} disabled={submitting}>
                                            Create
                                        </button>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                />
            </Grid>
        </div>
    )
}

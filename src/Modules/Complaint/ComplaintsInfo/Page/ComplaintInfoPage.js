import React, { useState } from 'react'
import { useStyles } from '../../../../styles.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import { MenuItem, Select } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import { useUpdateAlert } from "../../../../Core/Context/AlertContext"
import AxiosHit from "../../../../Core/API/AxiosHit"

export default function ComplaintInfo() {
    const classes = useStyles()
    const [complaintInfo] = useState(JSON.parse(localStorage.getItem("complaintInfo")))
    const [userInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))
    const setAlertInfo = useUpdateAlert()

    const [selectedStates, setSelectedStates] = useState(complaintInfo.status)
    const [statusList] = useState([
        'Pending',
        'Active',
        'Done',
        'Canceled',
    ])
    async function handelSubmit() {
        let hitResult = await AxiosHit({
            method: "put", url: "complaints/updatestatus/" + complaintInfo.complaintId, redirectTo: '/', data: {
                status: selectedStates
            }
        })
        if (!hitResult.success) {
            setAlertInfo({ alertType: hitResult.result, alertMsg: hitResult.description, redirectTo: hitResult.redirectTo })
        } else {
            setAlertInfo({ alertType: 'success', alertMsg: 'Successfully Updated', redirectTo: '/' })
        }
    }

    return (
        <div className={classes.InnerGrid}>
            <div className={classes.silverInnerGrid}>

                <Grid
                    container
                    direction="row"
                    alignItems="flex-end"
                    justify="flex-start"
                    style={{ minHeight: '70vh' }}
                >
                    <Grid item xs={5}>
                        <Grid className={classes.paper}>
                            <Typography className={classes.subtitleStyle} justify="center" component="h3">
                                Complaint Details
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={5}>
                        <Grid className={classes.paper}>
                            <Typography className={classes.inputLabel} component="h3">
                                SUBJECT
                            </Typography>
                            <Typography className={classes.subtitleStyle} component="h3">
                                {complaintInfo.subject}
                            </Typography>

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid className={classes.paper}>
                            <Typography className={classes.inputLabel} component="h3">
                                STATUS
                            </Typography>
                            <Typography className={classes.subtitleStyle} component="h3">
                                {complaintInfo.status}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Grid className={classes.paper}>
                            <Typography className={classes.inputLabel} component="h3">
                                COMPLAINT ID
                            </Typography>
                            <Typography className={classes.subtitleStyle} component="h3">
                                {complaintInfo.complaintId}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid className={classes.paper}>
                            <Typography className={classes.inputLabel} component="h3">
                                SEVERITY
                            </Typography>
                            <Typography className={classes.subtitleStyle} component="h3">
                                {complaintInfo.severity}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Grid className={classes.paper}>
                            <Typography className={classes.inputLabel} component="h3">
                                COMPLAINT TYPE
                            </Typography>
                            <Typography className={classes.subtitleStyle} component="h3">
                                {complaintInfo.complaintType}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid className={classes.paper}>
                            <Typography className={classes.inputLabel} component="h3">
                                OPENED BY
                            </Typography>
                            <Typography className={classes.subtitleStyle} component="h3">
                                {complaintInfo.openedBy}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid className={classes.paper}>
                            <Typography className={classes.inputLabel} component="h3">
                                DETAIL
                            </Typography>
                            <Typography className={classes.subtitleStyle} component="h3">
                                {complaintInfo.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div style={{ 'width': '100%', 'text-align': '-webkit-center' }}>
                {userInfo.isAdmin ?
                    (

                        <div className={classes.centerAll} style={{ 'width': '50%' }}>
                            <br />
                            <br />
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel id="statusListElement-label">Status</InputLabel>
                                <Select
                                    displayEmpty
                                    value={selectedStates}
                                    labelId="statusListElement-label"
                                    name='statusListElement'
                                    id='statusListElement'
                                    required
                                    onChange={(e) => {
                                        setSelectedStates(e.target.value)
                                    }}
                                    className={classes.inputInput}
                                >
                                    <MenuItem disabled value="">
                                        <em>Please Select</em>
                                    </MenuItem>
                                    {statusList.map((states) => (
                                        <MenuItem value={states} key={states}>{states}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <div className={classes.subtitleDiv}>
                                <br />
                                <br />
                                <button type="submit" className={classes.regestBtn} onClick={handelSubmit}>
                                    Update
                                </button>
                            </div>
                        </div>
                    )
                    :
                    ""
                }

            </div>
        </div>
    )
}
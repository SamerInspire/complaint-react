import React from "react"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { useStyles } from "../../../styles.js"

export default function ComplaintHeader() {
    const classes = useStyles()
    const handelSignOut = () => {
        localStorage.clear();
    }
     return (
        <AppBar position="static" width="100%" style={{ marginBottom: '19px' }} color='transparent'>
            <Toolbar>
                <img alt="" src={process.env.PUBLIC_URL + '/inspire-logo.png'} width="150px" height="100%" />
                    &nbsp;
                    <Typography className={classes.title} variant="h6" noWrap>
                    InspireJo
                    </Typography>
                    &nbsp;
                    <Typography className={classes.inputLabel} variant="h6" noWrap >
                    Complaints Management Portal
                    </Typography>
                <div className={classes.root} />
                <Button variant="text" href="/" color="primary" className={classes.rightSide}>View All Complaint</Button>
                <Button variant="text" href="/complaint/new" color="primary" className={classes.rightSide}>Create Complaint</Button>
                <Button variant="text" href="/" color="primary" className={classes.rightSide} onClick={handelSignOut}>Sign out</Button>
            </Toolbar>
        </AppBar>)
}
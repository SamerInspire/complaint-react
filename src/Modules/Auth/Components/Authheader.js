import React from "react"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { useStyles } from "../../../styles.js"
import Flag from 'react-flagpack'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom"
import Box from '@material-ui/core/Box'

export default function AuthHeader() {
    const classes = useStyles()
    const [t, i18n] = useTranslation('common')

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
                <Box className={classes.root} />
                <Link to={{ pathname: "/"}}>
                <Button variant="text"  color="primary" className={classes.rightSide}>{t("header_section.signin_btn")}</Button>
                </Link>
                <Box onClick={() => {i18n.changeLanguage('ar'); localStorage.setItem("lang",'ar')}} style={{ width: '20px', float: 'right' }}>
                    <Flag code="JO" gradient="real-linear" size="m" /> 
                </Box>
                <Box onClick={() => {i18n.changeLanguage('en'); localStorage.setItem("lang",'en')}} style={{ width: '20px', float: 'right' }}>
                    <Flag code="US" gradient="real-linear" size="m" />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
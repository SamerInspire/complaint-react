import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useStyles } from '../../../../styles.js'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Grid from "@material-ui/core/Grid"
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import AlertPopup from "../../../../Core/Component/ShowAlert.js"
import AxiosHit from "../../../../Core/API/AxiosHit"
import { HandelRegularHit } from '../../../../Core/Utils/HitHandiling'
import { useUpdateLoginInfo } from '../../../../Core/Context/LoginInfoContext'
import { useUpdateAlert } from "../../../../Core/Context/AlertContext"

export default function ComplaintList() {
    const classes = useStyles()
    const setAlertInfo = useUpdateAlert()
    const loginUpdate = useUpdateLoginInfo()
    const [userInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))
    const [pageNo, setPageNo] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [colSort, setColSort] = useState('complaintId')
    const data = useMemo(() => {
        return getDataList()
    }, [pageNo, pageSize, colSort])
    async function getDataList() {
        let pagenationDetails = '';
        if (!!pageNo)
            pagenationDetails = 'pageNo=' + pageNo + '&'
        if (!!pageSize)
            pagenationDetails += 'pageSize=' + pageSize + '&'
        if (!!colSort)
            pagenationDetails += '&colSort=' + colSort

        let hitResult = await AxiosHit({
            method: "get", url: "complaints"
        })
        HandelRegularHit(hitResult, setAlertInfo, loginUpdate, loginUpdate)
        console.log('complaints', hitResult)
        return !!hitResult.data ? hitResult.data.complaints : ''
    }

    async function handelComplaintClick(e, id) {
        let hitResult = await AxiosHit({
            method: "get", url: "complaints" + e
        })
        if (!hitResult.success) {
            setAlertInfo({ alertType: hitResult.result, alertMsg: hitResult.description, redirectTo: hitResult.redirectTo })
        } else {
            localStorage.setItem("complaintInfo", JSON.stringify(hitResult.data.complaints[0], 1))
            window.location.href = "/complaint"
        }
    }

    return (
        <Grid container direction="column" className={classes.InnerGrid} justify="center">
            {
                !!localStorage.getItem('alertInfo') ? <AlertPopup /> : ''
            }
            <Card >
                <CardHeader
                    subheader={"Hello ".concat(userInfo.name).concat(" (").concat(userInfo.email).concat(")")}
                />

                <CardContent justify="center" style={{ backgroundColor: 'silver', width: '98%', float: 'right' }}>
                    <Typography className={classes.subtitleStyle} component="h3">
                        All Complaints
                    </Typography>
                    <TableContainer >
                        <Table className={classes.table} aria-label="Complaints table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">SUBJECT</TableCell>
                                    <TableCell align="center">COMPLAINT TYPE</TableCell>
                                    <TableCell align="center">COMPLAINT ID</TableCell>
                                    <TableCell align="center">SEVERITY</TableCell>
                                    <TableCell align="center">STATUS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(data) && data.length > 0 ?
                                        data.forEach((row) => (
                                            <TableRow key={row.complaintId}>
                                                <TableCell align="center">
                                                    <Button variant="text" color="primary" onClick={(e) => handelComplaintClick(row.complaintId, e)}>{row.subject}</Button>
                                                </TableCell>
                                                <TableCell align="center">{row.complaintType}</TableCell>
                                                <TableCell align="center">
                                                    <Button variant="text" color="primary" onClick={(e) => handelComplaintClick(row.complaintId, e)}>{row.complaintId}</Button>
                                                </TableCell>
                                                <TableCell align="center">{row.severity}</TableCell>
                                                <TableCell align="center">{row.status}</TableCell>
                                            </TableRow>
                                        ))
                                        :
                                        (
                                            <TableRow key="1">
                                                <TableCell align="center" colSpan="5">No Data Provided</TableCell>
                                            </TableRow>
                                        ) 
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Grid>
    )
}

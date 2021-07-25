import React from 'react'
import { Container } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useStyles } from '../../styles.js'
import { Switch, Route, Redirect } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import SignIn from "../../Modules/Auth/SignIn/Page/SigninPage"
import SignUp from "../../Modules/Auth/Registration/Page/SignupPage"
import AuthHeader from "../../Modules/Auth/Components/Authheader"
import ComplaintHeader from "../../Modules/Complaint/Components/Complaintheader"
import ComplaintList from "../../Modules/Complaint/ComplaintsList/Page/ComplaintListPage"
import ComplaintInfo from "../../Modules/Complaint/ComplaintsInfo/Page/ComplaintInfoPage"
import NewComplaint from "../../Modules/Complaint/NewComplaint/Page/NewComplaintPage"
import ShowAlert from "./ShowAlert"
import { useLoginInfo } from '../Context/LoginInfoContext'
export default function MainLayout(props) {
  const classes = useStyles()
  const LoginInfo = useLoginInfo()
  console.log('LoginInfo',LoginInfo)
  return (
    <React.Fragment >
      <ShowAlert />
      <Container id="headerContainer" className={classes.upperMenue}>
        {LoginInfo.login ? <ComplaintHeader /> : <AuthHeader />}
      </Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <Switch>
          <Route exact path='/' component={LoginInfo.login ? ComplaintList : SignIn} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/complaint/new' component={NewComplaint} />
          <Route exact path='/complaint' component={ComplaintInfo} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Grid>
    </React.Fragment>
  )
}

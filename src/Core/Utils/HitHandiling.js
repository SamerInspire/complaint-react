
import { ACTIONS} from '../Context/LoginInfoContext'

export function HitHandle(result) {

    const code = result.data.result
    switch (code) {
        case '0':
            return { success: true, result: '', description: '', data: result.data, authorization: result.headers['authorization'] }
        case '102':
            return { success: false, result: 'error', description: 'User/Password dose not match' }
        case '103':
            return { success: false, result: 'error', description: 'Email Already Registered' }
        case ('106' || '107' || '108' || '109'):
            return { success: false, result: 'error', description: 'Session Expired', redirectTo: "/", clearStorage: true }
        default:
            return { success: false, result: 'error', description: result.data.result + ' - ' + result.data.resultDescription }
    }
}
export function HandelRegularHit(hitResult, setAlertInfo, loginUpdate,values) {
    console.log('hitResult',hitResult)
    if (!hitResult.success) {
        
        if(values) values.password = '' //for sign in and sign up pages
        
        if (hitResult.clearStorage) {
            loginUpdate('', ACTIONS.SIGN_OUT)
        }
        setAlertInfo({ alertType: hitResult.result, alertMsg: hitResult.description, redirectTo: hitResult.redirectTo })
    } else {
        if (!!hitResult.data.user && !!hitResult.authorization)
            loginUpdate({ type: ACTIONS.SIGN_IN, payload: { userInfo: hitResult.data.user, authorization: hitResult.authorization } })
    }
}

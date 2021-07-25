import React, { useContext, useReducer } from 'react'
import useLocalStorage,{clearStorage} from '../Utils/useLocalStorag'
import { useHistory } from "react-router-dom";

const LoginInfoContext = React.createContext()
const UpdateLoginInfoContext = React.createContext()

export const ACTIONS = {
    SIGN_IN: 'sign-in',
    SIGN_OUT: 'sign-out',
}

export function useLoginInfo(){
    return useContext(LoginInfoContext)
}

export function useUpdateLoginInfo(){
    return useContext(UpdateLoginInfoContext)
}
export function LoginInfoProvider({ children }) {
    const [userStorage,setUserStorage] = useLocalStorage('userInfo','')
    const [authStorage,setAuthStorage] = useLocalStorage('authorization','')
    const history = useHistory();


    function newLogin(userInfo,authorization) {
        setUserStorage(userInfo)
        setAuthStorage(authorization)
        history.push("/")
        
        return { userInfo:userInfo, authorization: authorization, login:true, date:Date.now() }
    }

    function reducer(loginData, action) {
        switch (action.type) {
            case ACTIONS.SIGN_IN:
                return newLogin(action.payload.userInfo,action.payload.authorization)
            case ACTIONS.SIGN_OUT:
                clearStorage()
                return ''
            default:
                return loginData
        }
    }

    const [loginData, dispatch] = useReducer(reducer, {userInfo:userStorage,authorization:authStorage,login:!!userStorage&&!!authStorage})

    return (
        <LoginInfoContext.Provider value={loginData}>
            <UpdateLoginInfoContext.Provider value={dispatch}>
                {children}
            </UpdateLoginInfoContext.Provider>
        </LoginInfoContext.Provider>)
}
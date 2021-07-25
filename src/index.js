import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import MainLayout from "./Core/Component/MainLayout"
import * as serviceWorker from "./serviceWorker"
import { I18nextProvider } from "react-i18next"
import { i18nextInit } from "./Core/Context/Translations/i18nextInit"
import { AlertProvider } from './Core/Context/AlertContext'
import { LoginInfoProvider } from './Core/Context/LoginInfoContext'

ReactDOM.render(
    <BrowserRouter>
        <LoginInfoProvider>
            <AlertProvider>
                <I18nextProvider i18n={i18nextInit}>
                    <MainLayout />
                </I18nextProvider>
            </AlertProvider>
        </LoginInfoProvider>
    </BrowserRouter>,
    document.getElementById("root")
)

serviceWorker.unregister()
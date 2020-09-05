import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Landing from "./pages/Landing"
import TeatcherList from "./pages/TeacherList"
import TeatcherForm from "./pages/TeacherForm"

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={TeatcherList}/>
            <Route path="/give-classes" component={TeatcherForm}/>
        </BrowserRouter>
    )
}

export default Routes;
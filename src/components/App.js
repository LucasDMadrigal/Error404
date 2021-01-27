import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Helloworld from './Helloworld'
import NotFound from './NotFound'
import '../styles/App.css'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Helloworld} />
                <Route exact path="/NotFound" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App

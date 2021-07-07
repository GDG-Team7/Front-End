import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Main from './component/pages/MainPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App

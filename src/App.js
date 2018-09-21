import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './home/home'
import DefaultLayout from './layouts/Default'
import NotFoundPage from './NotFoundPage'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <AppRoute exact path='/' layout={DefaultLayout} component={Home} />
          <AppRoute exact layout={DefaultLayout} component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

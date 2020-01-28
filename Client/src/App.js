import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect, 
} from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import HomePage from './pages/login/login'
import AdminDashboard from './pages/admin/adminDash'
import ClientDashboard from './pages/client/clientDashboard/clientDash'
import FullLayout from './pages/fullLayout/fullLayout'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
      {...rest}
      render={props =>
          rest.isAuthenticated === true ? (
              <Component {...props} />
          ) : (
              <Redirect to="/" />
          )
      }
  />
)

class App extends React.Component {
  render() {
      const { isAuthenticated, accessLevel } = this.props.jwt
      return (
          <Router>
              <Switch>
                  <Route path="/" exact component={HomePage} />
                  <FullLayout>
                      <PrivateRoute
                          path="/admin/home"
                          exact
                          component={AdminDashboard}
                          isAuthenticated={
                              isAuthenticated && accessLevel === 2
                          }
                      />
                      {/* <PrivateRoute
                          path="/admin/support"
                          component={Support}
                          isAuthenticated={
                              isAuthenticated && accessLevel === 2
                          }
                      />
                       <PrivateRoute
                          path="/admin/test"
                          component={Test}
                          isAuthenticated={
                              isAuthenticated && accessLevel === 2
                          }
                      />
                       <PrivateRoute
                          path="/admin/vision"
                          component={Vision}
                          isAuthenticated={
                              isAuthenticated && accessLevel === 2
                          }
                      />
                       <PrivateRoute
                          path="/admin/valve"
                          component={Valve}
                          isAuthenticated={
                              isAuthenticated && accessLevel === 2
                          }
                      /> */}
                      {/* <PrivateRoute
                          path="/admin/reports"
                          component={ChartComponent}
                          isAuthenticated={
                              isAuthenticated && accessLevel === 2
                          }
                      />
                       <PrivateRoute
                          path="/admin/inventory"
                          component={AdminInventory}
                          isAuthenticated={
                              isAuthenticated && accessLevel === 2
                          }
                      /> */}

                      <PrivateRoute
                          exact
                          path="/client/dashboard"
                          component={ClientDashboard}
                          isAuthenticated={isAuthenticated}
                      />

                      {/* <PrivateRoute
                          path="/tranducers"
                          component={Tranducers}
                          isAuthenticated={isAuthenticated}
                      />
                      <PrivateRoute
                          path="/reports"
                          component={ReportsPage}
                          isAuthenticated={isAuthenticated}
                      />
                      <PrivateRoute
                          path="/equipments"
                          component={EquipmentTable}
                          isAuthenticated={isAuthenticated}
                      /> */}
                  </FullLayout>
              </Switch>
          </Router>
      )
  }
}

const mapStateToProps = state => {
  return {
      jwt: state.jwt,
  }
}

export default connect(mapStateToProps)(App)

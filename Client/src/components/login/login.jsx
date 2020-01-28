import React from 'react';
import './login.scss';
// import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'


class LogIn extends React.Component{
  

    // handleSubmit = e => {
    //     e.preventDefault()

    //     fetch('/api/users/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             username: this.state.username,
    //             password: this.state.password,
    //         }),
    //     })
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json.token)
    //             if (json.error) return false
    //             this.props.dispatch1(
    //                 json.token,
    //                 json.username,
    //                 json.userData.access_level_id
    //             )
    //         })
    //         .catch(error => console.log(error))
    // }

    // handleChange = event => {
    //     const { value, name } = event.target
    //     this.setState({ [name]: value })
    // }

    render() {
        // const { isAuthenticated, accessLevel } = this.props.jwt
        // if (isAuthenticated && accessLevel === 1)
        //     return <Redirect to="/dashboard" />
        // if (isAuthenticated && accessLevel === 2) return <Redirect to="/admin/home" />
        // if (isAuthenticated && accessLevel === 3)
        //     return <Redirect to="/dashboard" />
        return (
            <div class="signup">
            <div class="signup-connect">
              <h1>Register Your WildCat Safety Account</h1>
              <a href="#" class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i> Sign in with Facebook</a>
              <a href="#" class="btn btn-social btn-twitter"><i class="fa fa-twitter"></i> Sign in with Twitter</a>
              <a href="#" class="btn btn-social btn-google"><i class="fa fa-google"></i> Sign in with Google</a>
              <a href="#" class="btn btn-social btn-linkedin"><i class="fa fa-linkedin"></i> Sign in with Linkedin</a>
            </div>
            <div class="signup-classic">
              <h2>Or use the classical way</h2>
              <form class="form">
                <fieldset class="username">
                  <input type="text" placeholder="username" />
                </fieldset>
                <fieldset class="email">
                  <input type="email" placeholder="email" />
                </fieldset>
                <fieldset class="password">
                  <input type="password" placeholder="password" />
                </fieldset>
                <button type="submit" class="btn">LogIn</button>
              </form>
            </div>
          </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         jwt: state.jwt,
//     }
// }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: (token, username, accessLevel) => {
//             dispatch(jwtAdd(token, username, accessLevel))
//         },
//     }
// }

export default LogIn


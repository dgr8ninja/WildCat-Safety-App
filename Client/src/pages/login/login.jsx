import React from 'react';
import logo from '../../assets/wildcat3.png'
import './login.scss'
import Login from '../../components/login/login';


class HomePage extends React.Component{
    render() {
        return (
            <>
            <div>
                <img src={logo} className="wildcat-logo" alt="logo"/>
            </div>
            <div className='homepage'>

                <Login/>

            </div>
            </>
        )
    }
}

export default HomePage
  
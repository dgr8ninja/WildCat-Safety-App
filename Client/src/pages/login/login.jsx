import React from 'react';
import logo from '../../assets/wildcat3.png'
import './login.scss'
import LogIn from '../../components/login/login';


class HomePage extends React.Component{
    render() {
        return (
            <>
            <div>
                <img src={logo} className="wildcat-logo" alt="logo"/>
            </div>
            <div className='homepage'>

                <LogIn/>

            </div>
            </>
        )
    }
}

export default HomePage
  
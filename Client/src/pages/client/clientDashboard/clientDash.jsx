import React from 'react'
import './clientDash.scss'
import { connect } from "react-redux";

const ClientDashboard = () => {
  return "home";
};

const mapStateToProps = (state, ownProps) => {
  return {
    jwt: state.jwt
  };
};

export default connect(mapStateToProps)(ClientDashboard);
import React from 'react'
import './adminDash.scss'
import { connect } from "react-redux";

const AdminDashboard = () => {
  return "home";
};

const mapStateToProps = (state, ownProps) => {
  return {
    jwt: state.jwt
  };
};

export default connect(mapStateToProps)(AdminDashboard);

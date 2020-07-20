import React from "react";
import "./UserDetail.css";
import { connect } from "react-redux";
import { logout } from "../../store/actions/user";
import { removeOrder } from "../../store/actions/order";

import { Link } from "react-router-dom";

function logoutButtan(a, b) {
  a();
  b();
}

function User(props) {
  return (
    <div className="Profile-Wrapper">
      <div>
        <img className="Profile-Img" src={props.User.picture} alt="" />
      </div>
      <div className="Details">
        <p>
          {props.User.name} <span>様</span>
        </p>

        <button>
          <Link to="/order">注文歴史</Link>
        </button>

        <button onClick={() => logoutButtan(props.logout, props.removeOrder)}>
          {" "}
          LogOut{" "}
        </button>
      </div>
    </div>
  );
}

function LoginGoogle(props) {
  return (
    <div className="Login-Google">
      <a href="https://severok-1.cuonhbui.repl.co/auth/google">
        <div>
          <i className="fa fa-google" />
        </div>
        <div>
          <p>Login With Google</p>
        </div>
      </a>
    </div>
  );
}

function UserDetail(props) {
  return props.User.name ? <User {...props} /> : <LoginGoogle />;
}

const mapStateToProps = state => ({
  User: state.user
});

export default connect(
  mapStateToProps,
  { logout, removeOrder }
)(UserDetail);

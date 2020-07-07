import React from "react";
import "./UserDetail.css";
import { connect } from "react-redux";
import { logout, getUser } from "../../store/actions/user";

function User(props) {
  console.log(props);

  return (
    <div className="Profile-Wrapper">
      <div>
        <img className="Profile-Img" src={props.User.picture} alt="" />
      </div>
      <div className="Details">
        <p>
          {props.User.name} <span>様</span>
        </p>

        <button href="#">注文歴史</button>
        <button onClick={() => props.logout()}> LogOut </button>
      </div>
    </div>
  );
}

function LoginGoogle(props) {
  return (
    <div className="Login-Google">
      <a href="https://sever-ok--cuonhbui.repl.co/auth/google">
        <div>
          <i class="fa fa-google" />
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
  { logout }
)(UserDetail);

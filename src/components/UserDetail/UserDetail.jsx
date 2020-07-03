import React from "react";
import "./UserDetail.css";

function User(props) {
  return (
    <div className="Profile-Wrapper">
      <div>
        <img className="Profile-Img" src="http://placehold.it/150" alt="" />
      </div>
      <div className="Details">
        <div>
          <p>
            Name <span>様</span>
          </p>
        </div>
        <div>
          <p>注文歴史</p>
        </div>
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
  return <LoginGoogle />;
}
export default UserDetail;

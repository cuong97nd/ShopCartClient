import React from "react";
import "./NavBar.css";
import "../../components/UserDetail/UserDetail";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UserDetail from "../../components/UserDetail/UserDetail";

const totalPrice = cart => {
  return cart.reduce(
    (accum, product) => accum + product.price * product.quantity,
    0
  );
};

const NavBar = props => (
  <div className="NavBar-Wrapper">
    <div className="Logo">
      <Link to="/">
        <p>ショップ</p>
      </Link>
    </div>
    <UserDetail />

    <div className="Cart-Info">
      <Link to="/cart">
        <span className="Cart-Item-Counter">{props.cart.length}</span>
        <i className="fa fa-shopping-bag" />
        <p>Cart: ￥{totalPrice(props.cart)}</p>
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  null
)(NavBar);

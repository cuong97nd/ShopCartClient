import React, { Component } from "react";
import "./Order.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeWholeItem
} from "../../store/actions/cart";
import { getOrder } from "../../store/actions/order";

// Components
import OrderItem from "../../components/OrderItem/OrderItem";
import BuySomething from "../../ui/BuySomething/BuySomething";

const totalPrice = cart => {
  return cart.reduce(
    (accum, product) => accum + product.price * product.quantity,
    0
  );
};

class Cart extends Component {
  componentDidMount() {
    this.props.getOrder(this.props.user.token);
  }
  render() {
    const cartItems = this.props.order.map((order, i) => (
      <OrderItem key={i} {...order} />
    ));
    return (
      <div>
        <h1 className="My-Cart-Title">注文歴史</h1>
        <div className="Cart-Products-Wrapper">
          <table className="Cart-Table">
            <thead>
              <tr>
                <th>状態</th>
                <th>注文日</th>
                <th>種類数</th>
                <th>値段</th>
                <th />
              </tr>
            </thead>
            <tbody>{cartItems}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {};

const mapStateToProps = state => ({
  user: state.user,
  order: state.order
});

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart, removeWholeItem, getOrder }
)(Cart);

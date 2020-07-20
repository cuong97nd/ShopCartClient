import React, { Fragment, Component } from "react";
import "./OrderItem.css";
import PropTypes from "prop-types";
import Modal from "react-modal";
import OrderItemDetail from "../OrderItemDetail/OrderItemDetail";

const customStyles = {
  content: {
    backgroundColor: "#fff",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const totalPrice = cart => {
  return cart.reduce(
    (accum, product) => accum + product.price * product.quantity,
    0
  );
};

class CartItem extends Component {
  state = {
    modalIsOpen: false
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  
  render() {
    console.log(this.props)
    const cartItems = this.props.cart.map((order, i) => (
      <OrderItemDetail key={i} {...order} />
    ));
    return (
      <Fragment>
        <tr>
          <td>{this.props.status}</td>
          <td>{this.props.orderTime}</td>
          <td>{this.props.cart.length}</td>
          <td>￥{totalPrice(this.props.cart)}</td>
          <td>
            <button onClick={this.openModal}>明細</button>
          </td>
        </tr>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Thanks"
          ariaHideApp={false}
        >
          <i className="fa fa-times Close-Modal" onClick={this.closeModal} />
          <div>
        <h1 className="My-Cart-Title">カード</h1>
        <div className="Cart-Products-Wrapper">
          <table className="Cart-Table">
            <thead>
              <tr>
                <th>写真</th>
                <th>商品</th>
                <th>数量</th>
                <th>値段</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cartItems}
              <tr>
                <td
                  style={{
                    verticalAlign: 0,
                    paddingTop: "1rem",
                    fontWeight: "bold"
                  }}
                >
                  合計
                </td>
                <td />
                <td />
                <td>
                  <p className="Total-Price">￥{totalPrice(this.props.cart)}</p>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </Modal>
      </Fragment>
    );
  }
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default CartItem;

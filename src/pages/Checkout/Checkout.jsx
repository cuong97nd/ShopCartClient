import React, { Component } from "react";
import "./Checkout.css";
import Modal from "react-modal";
import BuySomething from "../../ui/BuySomething/BuySomething";

import { connect } from "react-redux";

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

class Checkout extends Component {
  state = {
    name: "お客",
    email: "",
    country: "",
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
    if (!this.props.cart.length)
      return <BuySomething message="Cart is empty to checkout!" />;

    return (
      <div className="Checkout-Wrapper">
        <h1 className="Checkout-Title">ご会計</h1>
        <form className="Checkout-Form">
          <input
            type="text"
            name="name"
            placeholder="名前"
            onChange={this.onChangeHandler}
            className="Checkout-Input"
          />
          <input
            type="email"
            name="email"
            placeholder="メール"
            onChange={this.onChangeHandler}
            className="Checkout-Input"
          />
          <input
            type="number"
            name="number"
            placeholder="携帯電話"
            onChange={this.onChangeHandler}
            className="Checkout-Input"
          />
          <button
            className="product-button Checkout-Button"
            onClick={this.openModal}
          >
            注文
          </button>
        </form>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Thanks"
          ariaHideApp={false}
        >
          <i className="fa fa-times Close-Modal" onClick={this.closeModal} />
          <p style={{ color: "#000", padding: "20px" }}>
            <strong>{this.state.name}</strong>様。ご注文ありがとうございます。
          </p>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  null
)(Checkout);

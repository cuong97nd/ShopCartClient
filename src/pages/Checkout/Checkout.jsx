import React, { Component } from "react";
import "./Checkout.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { order } from "../../store/actions/cart";

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
  componentDidMount() {
    this.props.order(this.props.user.sub, this.props.cart);
  }

  render() {
    return (
      <Modal
        isOpen={true}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Thanks"
        ariaHideApp={false}
      >
        <Link to="/">
          <i className="fa fa-times Close-Modal" onClick={this.closeModal} />
        </Link>
        <p style={{ color: "#000", padding: "20px" }}>
          <strong>{this.props.user.name}</strong>
          様。ご注文ありがとうございます。
        </p>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user
});

export default connect(
  mapStateToProps,
  { order }
)(Checkout);

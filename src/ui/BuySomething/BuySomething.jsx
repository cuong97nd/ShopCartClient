import React from "react";
import "./BuySomething.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BuySomething = ({ message = "商品はありません" }) => (
  <div className="Cart-Empty-Wrapper">
    {" "}
    <h1 className="Cart-Empty">{message}</h1>{" "}
    <Link to="/" className="Go-To-Products">
      ホームページに戻ります
    </Link>
  </div>
);

BuySomething.propTypes = {
  message: PropTypes.string
};

export default BuySomething;

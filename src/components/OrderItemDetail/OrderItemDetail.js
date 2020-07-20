import React, { Fragment } from "react";
import PropTypes from "prop-types";

const OrderItemDetail = props => {
  return (
    <Fragment>
      <tr>
        <td>
          {" "}
          <img
            src={props.photo}
            alt={props.name}
            className="Cart-Item-Photo"
          />{" "}
        </td>
        <td>{props.name}</td>
        <td>
         
          <span className="Cart-Item-Quantity">{props.quantity}</span>
          
        </td>
        <td>￥{props.price}</td>
        
      </tr>
    </Fragment>
  );
};

export default OrderItemDetail;

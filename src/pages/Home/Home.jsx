import React, { Component } from "react";
import queryString from "query-string";

// Redux
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/products";
import { getUser } from "../../store/actions/user";
// Components
import Products from "../../components/Products/Products";

class Home extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    console.log("aaaaaaaaaaaaaaaaaa");
    console.log(this.props);
  }

  render() {
    var query = queryString.parse(this.props.location.search);
    console.log("token " + query.token);
    if (query.token) {
      this.props.getUser(query.token);
    }
    return (
      <main>
        <Products products={this.props.products} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { fetchProducts, getUser }
)(Home);

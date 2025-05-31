import { connect } from "react-redux"; //connect: A function from react-redux that connects a React component to the Redux store.
import Cart from "./Cart";

//keeps track of the application state
//It allows the component to read from the Redux store.
function mapStateToProps(state) {
  return {
    totalCost: state.totalCost, //Cart will receive totalCost  as prop.
    productCart: state.productCart //Cart will receive productCart as prop.
  }
}

//It maps action creators to the Cart component’s props.
//calls action methods (updates application state)
//it allows the component to write/update the Redux state.
function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: (productName, productPrice) => dispatch({
      type: "addProduct",
      productData: {
        productName: productName,
        productPrice: productPrice
      }
    }),
    onDeleteProduct: (productData) => dispatch({
      type: "deleteProduct",
      productData: productData
    })
  }
}

//connects dispatch methods to cart
//allows us to add and delete products
let connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default connectedComponent;
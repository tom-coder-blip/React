//This file is like your shop's notebook 📝 that:
//Keeps track of the total cost and the items in the cart.
//Has rules for what happens when a product is added or removed.

//This sets the starting point — an empty cart and total cost of R0.
function cartReducer(state, action) {
    if (state === undefined) {
        //initial state set
        return {
            totalCost: 0,
            productCart: []
        };
    }
    //defines actions (add and delete)
    switch (action.type) {
        case "addProduct":   //Increases the total cost (+productPrice)
            return {
                ...state,
                //payload values (cost and products)
                //updates totalCost
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                //adds product to cart
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        case "deleteProduct":  //Finds the item to delete (by name)
            //identify product by name and remove it from cart
            const updatedArray = state.productCart.filter(product =>
                product.productName !== action.productData.productName);
            return {
                ...state,
                //payload values (cost and products)
                //updates total cost
                totalCost: state.totalCost - parseInt(action.productData.productPrice),  //Subtracts its price from the total cost
                productCart: updatedArray 
            }
        default:
            return state;
    }
}
export default cartReducer;
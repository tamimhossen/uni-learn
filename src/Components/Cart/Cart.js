import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        const price = parseFloat(course.price);
        total = total + price;
    }
    
    let shipping = 0;

    if (total > 35) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 0;
    }

    const tax = total / 10;

    return (
        <div className="border">
            <h4>Total Items Ordered: {props.cart.length}</h4>
            <p>Total Price: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {(total + shipping + tax).toFixed(2)}</p>
        </div>
    );
};

export default Cart;
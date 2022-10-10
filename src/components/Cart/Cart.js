import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please, add at least One item.</p>
    }
    else if (cart.length === 1) {
        message = <p>Please, add some more items.</p>
    }
    else {
        message = <p>Thanks, for adding items to cart.</p>
    }

    return (
        <div>
            <h3 className={cart.length === 7 ? 'blue' : 'orange'}>Order Summary</h3>
            <h5 className={`color ${cart.length === 1 ? 'red' : 'blue'}`}>Orders: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>ternary condition true.</p> : <p>ternary condition false.</p>
            }
            {
                cart.length === 7 && <p>All items added.</p>
            }
            {
                cart.length === 7 || <p>You can add more items.</p>
            }
        </div>
    );
};

export default Cart;
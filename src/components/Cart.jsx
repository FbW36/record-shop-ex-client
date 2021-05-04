import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import OrderHistory from './OrderHistory';
import { sendOrder } from '../helpers/apiCalls';

const Cart = () => {
  const {
    cart,
    user,
    orders,
    setCart,
    setOrders,
    cartCounter,
    setCartCounter,
  } = useContext(UserContext);

  const recordsList = cart.records.map((entry) => {
    return (
      <>
        <div className='record' key={entry.record._id}>
          <div className='img'>
            <img src={entry.record.cover}></img>
          </div>
          <div className='info'>
            <p className='title'>{entry.record.title}</p>
            <p className='artist'>{entry.record.artist}</p>
            <p className='price'>{entry.record.price} $</p>
          </div>
        </div>
      </>
    );
  });

  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.record.price;
  };

  const totalAmount = cart.records.reduce(reducer, 0);

  const createOrder = async () => {
    let order = await sendOrder({ ...cart, ...{ userId: user._id } });
    if (!order.error) {
      setCart({ records: [], totalPrice: 0 });
      setOrders([...[order], ...orders]);
      setCartCounter();
    }
  };

  return (
    <div className='cart'>
      <section>
        {cartCounter && (
          <>
            <h3>CART</h3>
            <p>Money money moenyeyeyeyeye!</p>
            <div className='current-order'>
              <div className='left'>{recordsList}</div>
              <div className='right'>
                <img src='https://images.squarespace-cdn.com/content/v1/5b767372506fbefa1c2e1a39/1580539244912-ZXECIDBHP72WUZ4PP4OD/ke17ZwdGBToddI8pDm48kIXUpvhBrBZPKoLIxiWlZx97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UW6r-5KZab7F0Ak3dvMWCwb56ceReDoNB9OE6BF3ct6_tN_KfIuurh-w-x7bjNuMJA/Heineken+Can+1.jpg?format=750w' />
                <div className='total'>
                  <p className='header'>ORDER TOTAL</p>
                  <p className='amount'>{parseFloat(totalAmount).toPrecision(4)} $</p>
                </div>

                <div className='buy-but'>
                  <button className='main-button' onClick={createOrder}>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        <OrderHistory></OrderHistory>
      </section>
    </div>
  );
};

export default Cart;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

import { UserContext } from '../context/UserContext';
const AddToCart = ({ data }) => {
  const { cart, setCart, setCartCounter } = useContext(UserContext);

  const addRecordToCart = () => {
    console.log('CART', cart);
    console.log('RECORD', data);
    let pr = cart;
    // Is the record already in the cart?
    const foundIndex = cart.records.findIndex((record) => record.record._id === data._id);

    if (foundIndex == -1) {
      console.log('Record was not the cart');
      pr.records.push({ record: data, quantity: 1 });
    } else {
      console.log('Record was in the cart');
      pr.records[foundIndex]['quantity']++;
    }

    setCart(pr);
    setCartCounter(cart.records.length);
    console.log('NEW CART', cart);
  };

  return (
    <div className='add-to-cart'>
      <FontAwesomeIcon icon={faPlus} onClick={addRecordToCart} />
    </div>
  );
};

export default AddToCart;

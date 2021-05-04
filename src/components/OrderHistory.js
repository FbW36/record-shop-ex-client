import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { getOrders } from '../helpers/apiCalls';
import Order from './Order';

const OrderHistory = () => {
  const { setOrders, user, orders } = useContext(UserContext);

  useEffect(() => {
    const get = async () => {
      try {
        const result = await getOrders(user._id);
        if (!result.error) {
          setOrders(result);
        }
      } catch (error) {}
    };

    get();
  }, []);

  console.log('OOORDERS', orders);
  const orderList = orders.map((order) => {
    return <Order data={order}></Order>;
  });

  return (
    <div className='order-history'>
      <strong>ORDER HISTORY</strong>
      <br></br>
      <br></br>

      {orderList}
    </div>
  );
};

export default OrderHistory;

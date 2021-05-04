import { createContext, useState, useEffect } from 'react';
import { authenticateUser } from '../helpers/apiCalls';
export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({ records: [], totalPrice: 0 });
  const [records, setRecords] = useState([]);
  const [authIsDone, setAuthIsDone] = useState(false);
  const [orders, setOrders] = useState([]);
  const [cartCounter, setCartCounter] = useState();

  useEffect(() => {
    console.log('Context is trying to authenticate the user');
    const authMe = async () => {
      try {
        const result = await authenticateUser();
        if (result.error) {
          setUser();
          setAuthIsDone(true);
          return;
        }

        setUser(result);
        setAuthIsDone(true);
      } catch (error) {}
    };

    authMe();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        records,
        setRecords,
        authIsDone,
        setAuthIsDone,
        cart,
        setCart,
        orders,
        setOrders,
        cartCounter,
        setCartCounter,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

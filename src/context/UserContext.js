import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [records, setRecords] = useState([]);
  const [userStatus, setUserStatus] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, records, setRecords, userStatus, setUserStatus }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

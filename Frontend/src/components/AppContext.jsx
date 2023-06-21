import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import Login from '../pages/Login/Login';

// Create a new context
export const AppContext = createContext();

// Create a provider component to wrap the application
export const AppProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['phoneNumber']);
  const [phoneNumber, setPhoneNumber] = useState(cookies.phoneNumber || '');

  // Function to update the phone number and store it in the cookie
  const updatePhoneNumber = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
    setCookie('phoneNumber', newPhoneNumber, { expires: 7 });
  };

  return (
    <AppContext.Provider value={{ phoneNumber, updatePhoneNumber }}>
     <Login />
    </AppContext.Provider>
  );
};

import { useState } from "react";

// const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : initialValue;
//   });

// const setValue = (value) => {
//   window.localStorage.setItem(key, JSON.stringify(value));
//   setStoredValue(value);

// };
//   return [storedValue, setValue];
// };

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValues] = useState(() => {
    //destruct
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key)); //if true will be in storedValue
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue; // if false will be the new value for storedValue
    }
  });

  //change state and local storage at the same time
  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue]; //does storedValue go into setValue ????
};

export default useLocalStorage;

import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
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
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue]; //does storedValue go into setValue ????
};

export default useLocalStorage;

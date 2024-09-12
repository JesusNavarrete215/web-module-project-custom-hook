import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

const useDarkMode = (initialValue) => {
  //composing custom hooks
  const [value, setValue] = useLocalStorage("darkMode", initialValue);
  //check the users OS darkMode preference and set the as the initial value

  return [value, setValue];
};
export default useDarkMode;

import { useState } from "react";

export const useLocalStorage = (key) => {
  const [storeValue, setStoreValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || [];
  });

  function setLocal(data) {
    const updatedValue = [...storeValue, data];
    setStoreValue(updatedValue);
    localStorage.setItem(key, JSON.stringify(updatedValue));
  }

  function editLocal(id, value) {
    const updatedValue = storeValue.map((action) => {
      if (action.id === id) {
        return {
          ...action,
          name: value,
        };
      } else {
        return action;
      }
    });

    setStoreValue(updatedValue);
    localStorage.setItem(key, JSON.stringify(updatedValue));
  }

  function deleteValueLocal(id) {
    const updatedValue = storeValue.filter((action) => action.id !== id);
    setStoreValue(updatedValue);

    localStorage.setItem(key, JSON.stringify(updatedValue));
  }

  return {
    storeValue,
    //
    setLocal,
    editLocal,
    deleteValueLocal,
  };
};

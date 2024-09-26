import React, { useState } from "react";
import { get } from "http";
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        return initialValue;
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        return initialValue;
    })

    const setValue = newValue => {
        setStoredValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue))

    }

    return [storedValue, setValue];
}
export default useLocalStorage;
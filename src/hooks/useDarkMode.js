import useLocalStorage from "./useLocalStorage";
import { useEffect } from 'react';

const useDarkMode = () => {
    const [darkmode, setDarkMode] = useLocalStorage('isDarkModeEnable');
    useEffect(() => {
        const body = document.querySelector('body');
        if (darkmode === true) {

            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [darkmode]);
    return [darkmode, setDarkMode]
}
export default useDarkMode;
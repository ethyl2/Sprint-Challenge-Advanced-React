import {useState, useEffect } from 'react';

const useDarkMode = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const bodyEl = document.querySelector('body');
        if (dark === true) {
            bodyEl.classList.add('dark-mode');
        } else {
            bodyEl.classList.remove('dark-mode');
        }
    }, [dark]);

    return [dark, setDark];
}

export default useDarkMode;
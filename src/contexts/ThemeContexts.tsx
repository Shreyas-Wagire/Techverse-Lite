import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Always use light theme
        document.documentElement.classList.remove('dark');
        localStorage.setItem('techverse-theme', 'light');
    }, []);

    const toggleTheme = () => {
        // Keep it always light
        setIsDark(false);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

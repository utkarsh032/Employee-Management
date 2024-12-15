import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export let Services = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme ? 'dark' : 'light'
        } min-h-screen flex items-center justify-center transition-colors duration-300`}
    >
      <h1 className="text-6xl font-bold text-center ">
        This Page Under Development.
      </h1>
    </div>
  );
};


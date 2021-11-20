import React from 'react';
import s from './Header.module.css';
import { SearchCity } from './SearchCity/SearchCity';

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.powered}>
        <span>POWERED BY</span>
        <a
          href='https://www.weatherapi.com/'
          target='_blank'
          rel='noreferrer'
          title='Free Weather API'
        >
          <img
            src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png'
            alt='WeatherAPI.com'
          />
        </a>
      </div>
      <SearchCity />
    </header>
  );
};

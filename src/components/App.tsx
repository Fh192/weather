import React, { useEffect } from 'react';
import { useSelector } from '../hooks/useSelector';
import './App.css';
import AppRouter from './AppRouter/AppRouter';
import { Header } from './Header/Header';

const App: React.FC = () => {
  const { city } = useSelector(s => s.weatherParams);

  useEffect(() => {
    const [location] = city.split(',');
    document.title = `Weather in ${
      location.charAt(0).toUpperCase() + location.slice(1)
    }`;
  }, [city]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;

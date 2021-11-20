import React, { useEffect, useRef, useState } from 'react';
import s from './SearchCity.module.css';
import searchIcon from '../../../assets/search.svg';
import { useSearchQuery } from '../../../api/weatherAPI';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { Preloader } from '../../Preloader/Preloader';
import { useDispatch } from 'react-redux';
import { setCity } from '../../../store/reducers/weatherParamsSlice';

export const SearchCity: React.FC = () => {
  const dispatch = useDispatch();
 
  const ref = useRef<HTMLDivElement>(null);
  const [searchCity, setSearchCity] = useState('');
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  const { data: suggestions = [], isFetching } = useSearchQuery(
    searchCity.length >= 3 ? searchCity : ''
  );

  const inputClickHandler = () => {
    if (!!suggestions.length) {
      setSuggestionsVisible(true);
    }
  };

  const suggestionSelectHandler = (suggestion: string) => {
    dispatch(setCity(suggestion));
    setSearchCity('');
    setSuggestionsVisible(false);
  };

  useEffect(() => {
    if (!!suggestions.length) {
      setSuggestionsVisible(true);
    }
  }, [suggestions]);

  useEffect(() => {
    if (!searchCity.length) {
      setSuggestionsVisible(false);
    }
  }, [searchCity, suggestionsVisible]);

  useOnClickOutside(ref, () => setSuggestionsVisible(false));

  return (
    <div className={s.searchCity} ref={ref}>
      <div
        className={s.searchCityInput}
        style={{
          borderRadius: `8px 8px ${suggestionsVisible ? '0 0' : '8px 8px'}`,
        }}
      >
        <input
          type='text'
          value={searchCity}
          placeholder='Search city'
          onChange={e => setSearchCity(e.currentTarget.value)}
          onClick={inputClickHandler}
        />
        <img src={searchIcon} alt='search' />
      </div>
      {suggestionsVisible && (
        <ul className={s.suggestions}>
          {!isFetching ? (
            !!suggestions.length ? (
              suggestions.map(s => (
                <li key={s.id} onClick={() => suggestionSelectHandler(s.name)}>
                  {s.name}
                </li>
              ))
            ) : (
              <span className={s.noResults}>No results</span>
            )
          ) : (
            <Preloader />
          )}
        </ul>
      )}
    </div>
  );
};

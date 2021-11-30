import React, { useEffect, useRef, useState } from 'react';
import s from './SearchCity.module.css';
import searchIcon from '../../../assets/search.svg';
import { useSearchQuery } from '../../../api/weatherAPI';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { Preloader } from '../../Preloader/Preloader';
import { useDispatch } from 'react-redux';
import { setCity, setCoords } from '../../../store/reducers/weatherParamsSlice';
import { useNavigate } from 'react-router';
import { ICoords } from '../../../types';

export const SearchCity: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);
  const [searchCity, setSearchCity] = useState('');
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  const { data: suggestions = [], isFetching } = useSearchQuery(searchCity, {
    skip: searchCity.length < 3,
  });

  const inputClickHandler = () => {
    if (!!suggestions.length) {
      setSuggestionsVisible(true);
    }
  };

  const suggestionSelectHandler = (suggestion: string, coords: ICoords) => {
    const { lon, lat } = coords;
    navigate({ search: `?lat=${lat}&lon=${lon}` });

    dispatch(setCity(suggestion));
    dispatch(setCoords(coords));

    setSearchCity('');
    setSuggestionsVisible(false);
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  useEffect(() => {
    if (!!suggestions.length && searchCity.length >= 3) {
      setSuggestionsVisible(true);
    } else setSuggestionsVisible(false);
  }, [suggestions, searchCity]);

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
                <li
                  key={s.id}
                  onClick={() =>
                    suggestionSelectHandler(s.name, { lat: s.lat, lon: s.lon })
                  }
                >
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

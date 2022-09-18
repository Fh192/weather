import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchQuery } from '../../../api/weatherAPI';
import searchIcon from '../../../assets/search.svg';
import { useDebounce } from '../../../hooks/useDebounce';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { setCity, setCoords } from '../../../store/reducers/weatherParamsSlice';
import { ICoords } from '../../../types';
import { Preloader } from '../../Preloader/Preloader';
import s from './SearchCity.module.css';
import { Suggestion } from './Suggestion/Suggestion';

export const SearchCity: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);
  const [searchCity, setSearchCity] = useState('');
  const debouncedSearchCity = useDebounce<string>(searchCity, 500);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const { data: suggestions = [], isFetching } = useSearchQuery(
    debouncedSearchCity,
    { skip: debouncedSearchCity.length < 3 }
  );

  const inputFocusHandler = () => {
    if (suggestions.length) {
      setSuggestionsVisible(true);
    }
  };

  const suggestionSelectHandler = (suggestion: string, coords: ICoords) => {
    const { lon, lat } = coords;
    navigate({ search: `?lat=${lat}&lon=${lon}` });

    dispatch(setCity(suggestion));
    dispatch(setCoords(coords));
    setSearchHistory((history) => [...history, suggestion]);

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
          type="text"
          value={searchCity}
          placeholder="Search city"
          onChange={(e) => setSearchCity(e.target.value)}
          onFocus={inputFocusHandler}
        />
        <img src={searchIcon} alt="search" />
      </div>
      {suggestionsVisible && (
        <ul className={s.suggestions}>
          {isFetching && <Preloader />}

          {!suggestions.length && (
            <span className={s.noResults}>No results</span>
          )}

          {suggestions.map((s) => (
            <Suggestion
              key={s.id}
              suggestion={s.name}
              onSelect={() =>
                suggestionSelectHandler(s.name, { lat: s.lat, lon: s.lon })
              }
            />
          ))}
        </ul>
      )}
    </div>
  );
};

import React from 'react';
import s from './Suggestion.module.css';

interface Props {
  suggestion: string;
  onSelect: () => void;
}

export const Suggestion: React.FC<Props> = ({ suggestion, onSelect }) => {
  return (
    <li className={s.suggestion} onClick={onSelect}>
      {suggestion}
    </li>
  );
};

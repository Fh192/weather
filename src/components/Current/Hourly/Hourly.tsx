import React, { useRef } from 'react';
import s from './Hourly.module.css';
import arrow from '../../../assets/arrow.svg';
import { IHour } from '../../../types';
import { Hour } from './Hour/Hour';

interface Props {
  hour: IHour[];
}

export const Hourly: React.FC<Props> = ({ hour }) => {
  const hourlyRef = useRef<HTMLDivElement>(null);

  const sliderLeft = () => {
    if (hourlyRef.current) {
      const right = Number.parseInt(hourlyRef.current.style.right);
      if (right <= 0) {
        hourlyRef.current.style.right = '848px';
      } else {
        hourlyRef.current.style.right = `${right - 424}px`;
      }
    }
  };

  const sliderRight = () => {
    if (hourlyRef.current) {
      const right = Number.parseInt(hourlyRef.current.style.right);
      if (right >= 848) {
        hourlyRef.current.style.right = '0px';
      } else {
        hourlyRef.current.style.right = `${right + 424}px`;
      }
    }
  };

  return (
    <div className={s.hourly}>
      <button className={`${s.btn} ${s.btnLeft}`} onClick={sliderLeft}>
        <img src={arrow} alt='slide left' />
      </button>
      <div className={s.hours}>
        <div className={s.inner} style={{ right: '0px' }} ref={hourlyRef}>
          {hour.map(h => (
            <Hour {...h} key={h.time} />
          ))}
        </div>
      </div>
      <button className={`${s.btn} ${s.btnRight}`} onClick={sliderRight}>
        <img src={arrow} alt='slide right' />
      </button>
    </div>
  );
};

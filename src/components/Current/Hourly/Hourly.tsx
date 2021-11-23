import React, { useRef, useState } from 'react';
import s from './Hourly.module.css';
import arrow from '../../../assets/arrow.svg';
import { IHour } from '../../../types';
import { Hour } from './Hour/Hour';

interface Props {
  hour: IHour[];
}

export const Hourly: React.FC<Props> = ({ hour }) => {
  const hourlyRef = useRef<HTMLDivElement>(null);
  const [btnDisabled, setBtnDisabled] = useState({ left: true, right: false });

  const sliderLeft = () => {
    if (hourlyRef.current) {
      const right = Number.parseInt(hourlyRef.current.style.right);
      const width = Math.floor(hourlyRef.current.clientWidth);
      const slideSize = 53 * Math.ceil(width / 53);

      if (right - slideSize <= 53) {
        hourlyRef.current.style.right = `${0}px`;
        setBtnDisabled({ left: true, right: false });
      } else {
        hourlyRef.current.style.right = `${right - slideSize}px`;
        setBtnDisabled(v => ({ ...v, right: false }));
      }
    }
  };

  const sliderRight = () => {
    if (hourlyRef.current) {
      const right = Number.parseInt(hourlyRef.current.style.right);
      const width = Math.floor(hourlyRef.current.clientWidth);
      const scrollWidth = hourlyRef.current.scrollWidth;
      const slideSize = 53 * Math.ceil(width / 53);
      console.log(slideSize, width);

      if (right + slideSize + width >= scrollWidth - 53) {
        hourlyRef.current.style.right = `${scrollWidth - width}px`;
        setBtnDisabled({ left: false, right: true });
      } else {
        hourlyRef.current.style.right = `${right + slideSize}px`;
        setBtnDisabled(v => ({ ...v, left: false }));
      }
    }
  };

  return (
    <div className={s.hourly}>
      <button
        className={`${s.btn} ${s.btnLeft}`}
        disabled={btnDisabled.left}
        onClick={sliderLeft}
      >
        <img src={arrow} alt='slide left' />
      </button>
      <div className={s.hours}>
        <div className={s.inner} style={{ right: '0px' }} ref={hourlyRef}>
          {hour.map(h => (
            <Hour {...h} key={h.time} />
          ))}
        </div>
      </div>
      <button
        className={`${s.btn} ${s.btnRight}`}
        disabled={btnDisabled.right}
        onClick={sliderRight}
      >
        <img src={arrow} alt='slide right' />
      </button>
    </div>
  );
};

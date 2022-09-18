import React, { useRef, useState } from 'react';
import arrow from '../../../assets/arrow.svg';
import { IHour } from '../../../types';
import { Hour } from './Hour/Hour';
import s from './Hourly.module.css';

interface Props {
  hour: IHour[];
}

interface SlideFunctionArgs {
  right: number;
  width: number;
  scrollWidth: number;
  slideSize: number;
  listElement: HTMLDivElement;
}

export const Hourly: React.FC<Props> = ({ hour }) => {
  const hourlyRef = useRef<HTMLDivElement>(null);
  const [btnDisabled, setBtnDisabled] = useState({ left: true, right: false });

  const sliderLeft = (args: SlideFunctionArgs) => {
    const { listElement, right, slideSize } = args;

    if (right - slideSize <= 53) {
      listElement.style.right = `${0}px`;
      setBtnDisabled({ left: true, right: false });
    } else {
      listElement.style.right = `${right - slideSize}px`;
      setBtnDisabled(v => ({ ...v, right: false }));
    }
  };

  const sliderRight = (args: SlideFunctionArgs) => {
    const { listElement, right, scrollWidth, slideSize, width } = args;

    if (right + slideSize + width >= scrollWidth - 53) {
      listElement.style.right = `${scrollWidth - width}px`;
      setBtnDisabled({ left: false, right: true });
    } else {
      listElement.style.right = `${right + slideSize}px`;
      setBtnDisabled(v => ({ ...v, left: false }));
    }
  };

  const onSlide = (direction: 'right' | 'left') => () => {
    if (!hourlyRef.current) return undefined;

    const right = Number.parseInt(hourlyRef.current.style.right);
    const width = Math.floor(hourlyRef.current.clientWidth);
    const scrollWidth = hourlyRef.current.scrollWidth;
    const slideSize = 53 * Math.ceil(width / 53);

    const args: SlideFunctionArgs = {
      right,
      width,
      scrollWidth,
      slideSize,
      listElement: hourlyRef.current,
    };

    if (direction === 'right') {
      return sliderRight.call(null, args);
    }

    return sliderLeft.call(null, args);
  };

  return (
    <div className={s.hourly}>
      <button
        className={`${s.btn} ${s.btnLeft}`}
        disabled={btnDisabled.left}
        onClick={onSlide('left')}
      >
        <img src={arrow} alt="slide left" />
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
        onClick={onSlide('right')}
      >
        <img src={arrow} alt="slide right" />
      </button>
    </div>
  );
};

import { useEffect, useState } from 'react';

import constants from '../utils/constants';
import easeOutAnimate from '../utils/easeOutAnimate';

const useCountUp = (value) => {
  const [count, setCount] = useState(0);
  const rate = constants.countUpRate;
  const duration = constants.constUpDuration;
  const total = Math.round(duration / rate);
  let start = 0;

  useEffect(() => {
    const counter = setInterval(() => {
      start++;
      const progress = easeOutAnimate(start / total);
      const currentCount = Math.round(value * progress);

      setCount(currentCount);

      if (start === total) {
        clearInterval(counter);
      }
    }, rate);
  }, [value, rate, total, start]);

  return count;
};

export default useCountUp;

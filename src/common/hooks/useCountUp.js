import { useEffect, useState } from 'react';

import easeOutAnimate from '../utils/easeOutAnimate';

const useCountUp = (target) => {
  const [count, setCount] = useState(0);
  const rate = 1000 / 60;
  const total = Math.round(2000 / rate);
  let start = 0;

  useEffect(() => {
    const counter = setInterval(() => {
      start++;
      const progress = easeOutAnimate(start / total);
      const currentCount = Math.round(target * progress);

      setCount(currentCount);

      if (start === total) {
        clearInterval(counter);
      }
    }, rate);
  }, [target, rate, total, start]);

  return count;
};

export default useCountUp;

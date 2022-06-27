const easeOutAnimate = (time) => {
  return time === 0 ? time : 1 - Math.pow(2, time * -11);
};

export default easeOutAnimate;

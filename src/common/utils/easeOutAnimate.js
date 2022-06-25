const easeOutAnimate = (time) => {
  return time === 0 ? time : 1 - Math.pow(3, time * -6);
};

export default easeOutAnimate;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const animateValue = function(property: string, start: number, end: number, duration: DOMTimeStamp): void {
  let startTimestamp: number = 0;
  const step = (timestamp: number) => {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    this[property] = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

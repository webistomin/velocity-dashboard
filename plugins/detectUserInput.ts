export const detectUserInput = (): void => {
  document.body.addEventListener(
    'mousedown',
    function() {
      document.body.classList.add('using-mouse');
      document.body.classList.remove('using-keyboard');
    },
    false
  );

  document.body.addEventListener(
    'keydown',
    function(e) {
      const target = e.target as HTMLElement;

      if (target.tagName !== 'INPUT') {
        document.body.classList.add('using-keyboard');
        document.body.classList.remove('using-mouse');
      }
    },
    false
  );
};

$('.popup').draggable({ scroll: false});

const elem = document.querySelector('.popup');

new Knobs({
  visible: 2,
  CSSVarTarget: elem,
  appendTo: elem,
  theme: {
    "base-color": '#FFF',
    primaryColor: 'black',
    textColor: 'black',
    "side-pad": '10px',
  },
  knobs: [
    {
      cssVar: ['shadow-size', 'px'], 
      label: '--shadow-size',
      type: 'range',
      min: 0,
      max: 100,
      step: 1,
    },
    {
      cssVar: ['blur-size', 'px'], 
      label: '--blur-size',
      type: 'range',
      min: 0,
      value: 100,
      max: 300,
      step: 1,
    },
    {
      cssVar: ['blur-strength', 'px'], 
      label: '--blur-strength',
      type: 'range',
      min: 0,
      value: 3,
      max: 20,
      step: 1,
    },
  ]
})
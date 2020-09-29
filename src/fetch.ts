const fetchFn =
  global.window && global.window.fetch ? global.window.fetch : (require('node-fetch') as typeof global.window.fetch);

export default fetchFn;

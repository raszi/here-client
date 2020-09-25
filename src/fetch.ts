import fetch from 'node-fetch';

const fetchFn = global.window && global.window.fetch ? ((global.window.fetch as unknown) as typeof fetch) : fetch;

export default fetchFn;

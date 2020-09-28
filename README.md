# HERE.com JS client #

[![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![language][language-image]][language-url] [![License][license-image]][license-url]

[ci-image]: https://img.shields.io/github/workflow/status/raszi/here-client/Node.js%20CI/master
[ci-url]: https://github.com/raszi/here-client/actions?query=workflow%3A%22Node.js+CI%22
[npm-image]: https://img.shields.io/npm/v/here-client.svg
[npm-url]: https://npmjs.org/package/here-client
[license-image]: http://img.shields.io/npm/l/here-client.svg
[license-url]: LICENSE
[language-image]: https://img.shields.io/github/languages/top/raszi/here-client
[language-url]: https://github.com/raszi/here-client/search?l=typescript

This is a simple JavaScript client for HERE.com APIs.

## Supported APIs ##

### Weather ###

To retrieve a Weather client you need to call `client.weather`:

  * Observation: `weather.observation()`
  * Hourly forecast: `weather.hourlyForecast`
  * Seven day forecast: `weather.sevenDayForecast`
  * Seven day forecast simple: `weather.sevenDayForecastSimple`

## Examples ##

### JavaScript ###

```javascript
const HereClient = require('here-client');

const hereClient = new HereClient({ apiKey: 'foobar' });
hereClient.weather.observation({ name: 'Budapest' });
```


### TypeScript ###

```typescript
import HereClient from 'here-client';

const hereClient = new HereClient({ apiKey: 'foobar' });
hereClient.weather.observation({ name: 'Budapest' });
```


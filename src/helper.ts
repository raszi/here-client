type FormatFunction = (value: number, metric: boolean) => string;

export const formatTemperature: FormatFunction = (value, metric) => (metric ? `${value}°C` : `${value}°F`);
export const formatPressure: FormatFunction = (value, metric) => (metric ? `${value} hPa` : `${value} inches`);
export const formatSpeed: FormatFunction = (value, metric) => (metric ? `${value} kph` : `${value} mph`);

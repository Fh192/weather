export interface ICommon {
  temp_c: number;
  is_day: 0 | 1; // 1 = Yes 0 = No
  condition: Condition;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string; // Wind direction as 16 point compass
  pressure_mb: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
  uv: number;
  gust_kph: number;
}

export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}

export interface Condition {
  text: string;
}

export interface IAirQuality {
  co: number; // Carbon Monoxide (μg/m3)
  no2: number; // Nitrogen dioxide (μg/m3)
  o3: number; // Ozone (μg/m3)
  so2: number; // Sulphur dioxide (μg/m3)
  'us-epa-index': 1 | 2 | 3 | 4 | 5 | 6; // US - EPA standard.
}

export interface IAstro {
  sunrise: string; // as '00:00 AM'
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase:
    | 'New Moon'
    | 'Waxing Crescent'
    | 'First Quarter'
    | 'Waxing Gibbous'
    | 'Full Moon'
    | 'Waning Gibbous'
    | 'Last Quarter'
    | 'Waning Crescent';
  moon_illumination: string; // as %
}

export interface IHour extends ICommon {
  time: number;
  windchill_c: number;
  chance_of_rain: number; // as %
  chance_of_snow: number; // as %
}

export interface IDay {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  avghumidity: number;
  daily_chance_of_rain: number; // %
  daily_chance_of_snow: number; // %
  condition: Condition;
  uv: 1.0;
}

export interface ICurrentWeather extends ICommon {
  last_updated: number;
  air_quality: IAirQuality;
  feelslike_c: number;
}

export interface IForecast {
  date: number;
  day: IDay;
  astro: IAstro;
  hour: IHour[];
}

export interface IWeatherResponse {
  location: ILocation;
  current: ICurrentWeather;
}

export interface IForecastResponse extends IWeatherResponse {
  forecast: {
    forecastday: IForecast[];
  };
}

export interface ISearch extends ILocation {
  id: number;
}

export type IForecastDays = 1 | 2 | 3;

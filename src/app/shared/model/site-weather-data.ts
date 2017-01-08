import { HighTemperatureData } from './high-temperature-data';
import { LowTemperatureData } from './low-temperature-data';

export interface SiteWeatherData<T extends HighTemperatureData | LowTemperatureData> {
  site: {
    id: number;
    name: string;
    weather: T[];
  };
}

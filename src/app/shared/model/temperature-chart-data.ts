export interface Data {
  date: string;
  temperature: number;
}

export interface TemperatureChartData {
  series: Series[];
}

export interface Series {
  name: string;
  data: Data[];
}

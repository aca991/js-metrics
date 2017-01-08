export interface HighSeries {
    date: string;
    high_temp: number;
}

export interface LowSeries {
    date: string;
    low_temp: number;
}

export interface TemperatureChartData {
    high: {
        name: string;
        series: HighSeries[];
    }

    low: {
        name: string;
        series: LowSeries[];
    }
}
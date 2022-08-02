export interface Card {
    cityName: string;
    day:string;
    temp: string | number;
    humidity: string | number;
    pressure: string | number;
    wind: string | number;
    // icon: string;
    clicked:boolean;
}
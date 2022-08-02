import axios from 'axios';
import { config } from 'dotenv';


// TODO: axios fetch + module.exports

// - https://weatherstack.com/documentation
// - https://weatherstack.com/quickstart
// - http://api.weatherstack.com/


import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiCalls {

    public iconName:string = '';
    public cityName: string = '';
    public stateCode: string | number = '';
    public countryCode: string | number = '';
    public limit: string | number = '';
    public lat: string | number = '';
    public lon: string | number = '';
    public message: string = '';

    constructor(

    ) {
        axios.create();
    }

    //TODO: URL + keys in process.env()
    //TODO: Refacto :D
    //TODO: Body params, Bearer, method api post/get in header
    //TODO:code a popup message if success or error

    public apiCall(url:string, cityName:string){
        // const FETCHING_DATA_URL = `${process.env['API_WEATHERSTACK_BASEURL']}${cityName}`;
        const FETCHING_DATA_URL = `ImmaURL`;

        
        try{
            axios({
                method:'GET',
                url: FETCHING_DATA_URL,
                headers:{
                    'Access-Control-Allow-Origin': '*',
                }
            }).then(async res => {
                const receivedCityData = await res.data;
                if(receivedCityData.status === 200 || receivedCityData.status === 'OK') {
                    console.log(receivedCityData.json());
                    this.message = "Les données ont bien été récupérées.";
                    return receivedCityData.json();
                }
            })
        }catch(error:any){
            this.message = error;
            throw new Error(error);
        }
        
      }

        //   Fetch icons from WeatherStack API
//   public async fetchAllCityDatasWithWeatherStack(cityName:string){

    // should return this object for a given city :
    // {
    //     "request": {
    //         "type": "City",
    //         "query": "New York, United States of America",
    //         "language": "en",
    //         "unit": "m"
    //     },
    //     "location": {
    //         "name": "New York",
    //         "country": "United States of America",
    //         "region": "New York",
    //         "lat": "40.714",
    //         "lon": "-74.006",
    //         "timezone_id": "America/New_York",
    //         "localtime": "2019-09-07 08:14",
    //         "localtime_epoch": 1567844040,
    //         "utc_offset": "-4.0"
    //     },
    //     "current": {
    //         "observation_time": "12:14 PM",
    //         "temperature": 13,
    //         "weather_code": 113,
    //         "weather_icons": [
    //             "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    //         ],
    //         "weather_descriptions": [
    //             "Sunny"
    //         ],
    //         "wind_speed": 0,
    //         "wind_degree": 349,
    //         "wind_dir": "N",
    //         "pressure": 1010,
    //         "precip": 0,
    //         "humidity": 90,
    //         "cloudcover": 0,
    //         "feelslike": 13,
    //         "uv_index": 4,
    //         "visibility": 16
    //     }
    // }

//     axios.get(API_WEATHERSTACK_URL+cityName).then(async (res) => {
//         try {
//             const dataReceived = await res.data;
//             console.log(dataReceived.json());
//         } catch (error:any) {
//             throw new Error(error);
//         }})
//   }

//   public async fetchWeatherMapGeocodeDatas(cityName:string, stateCode:string | number, countryCode:string | number, limit:string | number):Promise<void>{
//     if(!cityName) return void new Error("Veuillez renseigner tous les champs");
//     // BASEURL + ${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${WEATHERMAP_API_KEY}

//         try{
//             axios.get(API_GEOCODING_URL).then(async (res) => {
//                 const dataReceived = await res.data;
//                 console.log(dataReceived.json());
//             });
//         }catch(error:any){
//             throw new Error(error);
//         }
//   }

//   //   Fetch icons from WeatherMap API
//   public async fetchWeatherMapOneCallDatas(lat:string | number, lon:string | number, part:string){
//     //BASEURL + lat=${lat}&lon=${lon}&exclude=${part}&appid=${WEATHERMAP_API_KEY}
//     axios.get(API_ONE_CALL_URL).then(async (res) => {
//         try {
//             const dataReceived = await res.data;
//             console.log(dataReceived.json());
//         } catch (error:any) {
//             throw new Error(error);
//         }})
//   }

//   //   Fetch icons from Weather API
//   public async fetchWeatherMapIconDatas(iconName:string){
//     // BASEURL + ${iconName}@4x.png

//     axios.get(API_WEATHER_ICON_URL).then(async (res) => {
//         try {
//             const dataReceived = await res.data;
//             console.log(dataReceived.json());
//         } catch (error:any) {
//             throw new Error(error);
//         }})
//   }

//     //   Fetch icons from WeatherStack API
//   public async fetchWeatherStackIconDatas(iconName:string){
//     // BASEURL + ${iconName}.png

//     axios.get(API_WEATHERSTACK_ICON_URL).then(async (res) => {
//         try {
//             const dataReceived = await res.data;
//             console.log(dataReceived.json());
//         } catch (error:any) {
//             throw new Error(error);
//         }})
//   }
}
import React from 'react';
import './Card.styles.css';


export const Card = props =>(
    <div className="card-container">
       <img alt="flag" src ={props.country.countryInfo.flag} height={100} width={200}/>
        <h2>{props.country.country}</h2>
        <h3>Total population: {props.country.population}</h3>
        <h3>Total cases: {props.country.cases}</h3>
        <h3>Total deaths: {props.country.deaths}</h3>
        <h3>Total recoveries:{props.country.recovered}</h3>
        <h3>Active cases: {props.country.active}</h3>
        <h3>Today cases: {props.country.tadayCases}</h3>
        <h3>Today deaths: {props.country.todayDeaths}</h3>
        <h3>Today recoveries: {props.country.todayRecovered}</h3>
    </div>
   
)
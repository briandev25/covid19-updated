import React from 'react';
import './CardList.styles.css';
import { Card } from '../Card/Card';

export const CardList = (props) =>{
   
   return(
       <div className='card-list'>
        {
        props.countries.map(
          country => <Card key ={country.country} country={country} />
          )
      }
       </div>
   )
}

//export default cardList;
import React, { useState } from 'react'
import './Getquotes.css'
import axios from 'axios';

const AccessFromApi = () => {
    const [Things,SetThings] = useState([]);
    const AccessData = async () =>{

const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  headers: {
    'X-RapidAPI-Key': '8ad2753520mshf3f8f78dd6f2e80p109f26jsn1cdc236fa19c',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	let data=response.data;
  console.log(data)
  SetThings(data)
} catch (error) {
	console.error(error);
}
    }


  return (
    <div>
        <div className='card'>
                {/* {Things.map((elem,i) =>{
                  return(
                    <h2 key={elem.id}>{elem.content}</h2>
                  )
                })} */}

            <div className='elements'>
              <h1>Quotes Generator</h1>
            <button className='btn' onClick={AccessData}>Get Quotes</button>
                <h2>{Things.content}</h2>
            </div>
        </div>
    </div>
  )
}

export default AccessFromApi
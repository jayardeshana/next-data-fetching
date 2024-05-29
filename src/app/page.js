'use client';

import axios from 'axios';
import { useState } from 'react';
import CovidData from './component/CovidData';
import Loader from './component/Loader';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        headers: {
          'X-RapidAPI-Key':
            'b0e3029f4fmsh8eb14ce15a93c09p1f7aabjsn8a109110cbb8',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
        },
      };
      const response = await axios.request(options);
      setData(response.data.response);
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!data ? (
            <button className='button-container' onClick={fetchData}>
              Fetch Data
            </button>
          ) : (
            <CovidData data={data} />
          )}
        </>
      )}
    </>
  );
}

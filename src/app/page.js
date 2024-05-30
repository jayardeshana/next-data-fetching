'use client';

import axios from 'axios';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const CovidData = dynamic(() => import('./component/CovidData'), {
  loading: () => <p>Loading data...</p>,
});
const Loader = dynamic(() => import('./component/Loader'), {
  ssr: false,
});
const CustomButton = dynamic(() => import('./component/CustomButton'), {
  loading: () => <p>Loading button...</p>,
  ssr: false,
});

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
            <>
              <CustomButton variant='primary' onClick={fetchData}>
                Fetch Data
              </CustomButton>
            </>
          ) : (
            <CovidData data={data} />
          )}
        </>
      )}
    </>
  );
}

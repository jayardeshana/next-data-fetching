import React from 'react';
import '../component/CovidData.css';
const CovidData = ({ data }) => {
  console.log(data, 'data');
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Continent</th>
            <th>Country</th>
            <th>Population</th>
            <th>Active-Cases</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((data, index) => (
              <tr key={index}>
                <td>{data.continent}</td>
                <td>{data.country}</td>
                <td>{data.population}</td>
                <td>{data.cases.active}</td>
                <td>{data.deaths.total}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CovidData;

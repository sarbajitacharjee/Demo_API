import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Getdata from './Getdata';
const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchdata = () => {
  axios.get('https://api.github.com/users')
  .then(response => {
      setData(response.data);
      // console.log(response.data)
      setLoading(false);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
    });
  }
  
  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>


    {/* <div className="overflow-x-auto"> */}
     <Getdata data={data}/>
    {/* </div> */}
    </>
  );
};

export default DataTable;

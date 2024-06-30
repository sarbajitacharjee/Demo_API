import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchdata = () => {
  axios.get('https://api.github.com/users')
  .then(response => {
      setData(response.data);
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
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-black">ID</th>
            <th className="px-4 py-2 border text-black">Username</th>
            <th className="px-4 py-2 border text-black">Profile URL</th>
            <th className="px-4 py-2 border text-black">Profile Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border text-black text">{user.id}</td>
              <td className="px-4 py-2 border text-black text-3xl">{user.login}</td>
              <td className="px-4 py-2 border text-black ">
                <a href={user.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  {user.html_url}
                </a>
              </td>
              <td className='px-3 py-2'> <img src={user.avatar_url} width={300} height={300}></img> </td>
            </tr>
          ))}
        </tbody>
      </table>
    {/* </div> */}
    </>
  );
};

export default DataTable;

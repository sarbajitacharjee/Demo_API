import React from 'react'

const Getdata = ({data}) => {
  return (
    <>

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
              <td className='px-3 py-2'> <img src={user.avatar_url} width={300} height={300} alt="images"></img> </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </>
  )
}

export default Getdata

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
// const [data,setData] =useState([])
//  useEffect(()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//         setData(data)
//     })
//  },[])

const data = useLoaderData()
console.log(data);
  return (
    <div className='text-center m-4 bg-gray-700 text-white'>
        Github Followers: {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
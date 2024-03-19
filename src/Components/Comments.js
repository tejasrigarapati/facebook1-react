
import React from 'react'
import { useEffect,useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import  './Feeds.css';
export default function Feeds() {
    const {data, setData,count,setCount}= useContext(Usecontext1);

    const url = `https://jsonplaceholder.typicode.com/comments?postId=${count}`;
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    }, []);
  return (
    
    <div className="feeds-container">
    {data && data.map((elem,index) => (
      <div key={elem.id}>
        <div>PostId: {elem.postId}</div>
        <div>Name: {elem.name}</div>
        <div>Email: {elem.email}</div>
        <div>Body: {elem.body}</div>
       <br></br>
      </div>
    ))}
  </div>
  )
}

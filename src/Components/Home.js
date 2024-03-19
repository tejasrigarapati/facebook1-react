import React, { useContext, useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { Link } from 'react-router-dom';
import './Home.css';
import { useFetch } from './useFetch';

import { useEffect } from 'react';
function Home() {
  const { flag, setFlag, UserName1 } = useContext(Usecontext1);
  const [num, setNum] = useState(0);
  const[album,setAlbum] = useState(0)

  const handleFileChange = (event) => {
    const UserID = document.getElementById("text1").value;
    setNum(UserID);
    
    

  };
  const url = `https://jsonplaceholder.typicode.com/posts/?userId=${num}`;
    useFetch(url);
  // if (album === 1) {
  //   const url = `https://jsonplaceholder.typicode.com/posts/?userId=${num}`;
  //   useFetch1(url);
  // } else if (album === 2) {
  //   const url = `https://jsonplaceholder.typicode.com/albums/?userId=${num}`;
  //   useFetch1(url);
  // }

  return (
    <div className="home-container">
      <div className="top-nav-container">
        <div className="nav-links">
          <div>Hello! {UserName1}, you have LoggedIn</div>
        </div>
        <div className="search-and-upload">
          <input type="text" id='text1' placeholder="Search..." onChange={handleFileChange} className="search-bar" />
          
          
        </div>
        <button className="logout-button" onClick={() => setFlag(0)}>Logout</button>
      </div>
      <div className="content-container">
        <div className="side-nav">
          <div onClick={()=>setAlbum(1)}>
          <Link to="/">Feeds</Link>
          </div>
          <div onClick={()=>setAlbum(2)}>
          <Link to="/albums">Albums</Link>
          </div>
          <div onClick={()=>setAlbum(2)}>
          <Link to="/post">Posts</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;

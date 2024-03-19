// Albums.js

import React, { useContext, useEffect } from "react";
import { Usecontext1 } from "../UserContext/Usercontext1";
import "./Albums.css";

export default function Albums() {
  const { data, setData ,UserName1,SetuserName1} = useContext(Usecontext1);
  const url = `https://jsonplaceholder.typicode.com/albums/?userId=${UserName1}`;

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="albums-container">
      {data &&
        data.map((elem) => (
          <div key={elem.id}>
            <p>UserId:{elem.userId}</p>
            <p>Title:{elem.title}</p>
          </div>
        ))}
    </div>
  );
}

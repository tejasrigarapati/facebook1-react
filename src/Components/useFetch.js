import { useContext } from "react";
import { useState, useEffect } from "react";
import { Usecontext1 } from "../UserContext/Usercontext1";



export const useFetch = (url) => {
    const {data, setData} = useContext(Usecontext1);
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url,setData]);
    return [data];
  };
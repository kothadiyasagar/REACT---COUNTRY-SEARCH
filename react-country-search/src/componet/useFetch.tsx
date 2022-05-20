import { useState, useEffect } from "react"

 export  const useFetch=(url:string)=>{
    const [data, setData] = useState<null | any>(null);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setData(res);
         
        })
        .catch(err => {
          setError(true);
         
        });
    }, [url]);
  
    return {
   
      data,
      error
    };

   
 }
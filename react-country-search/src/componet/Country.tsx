    import { time } from "console";
import React, { useState ,useEffect } from "react"
import { useFetch } from "./useFetch"
 import '../App.css'
import { NavLink } from "react-router-dom";
   export  const  Country = ()=>{
          const  De =(e:any) =>{
            //  e.preventDefault()
              // console.log(e)
            const timer = setTimeout(() => setquery(e), 4000);
              // clearTimeout(timer)
            console.log("sagar",query)
          }
                

            const [query, setquery] = useState<any>()
          
            const url = `http://localhost:3001/posts?q=${query}`

            const {data, error} = useFetch(url)
             console.log(data)
            
    return (
        <>
          <div style={{width:"100%", height:"70px", backgroundColor:"black", display:"flex"}}>
           <img    style={{height:"40px", marginTop:"15px", marginLeft:"20px", borderRadius:"50%"}}  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.C0It0Y9-HXIu_ieBD9beNwAAAA%26pid%3DApi&f=1"/>
     
           <input  placeholder="search country" onChange={(e)=>De(e.target.value)}  style={{marginLeft:"40%", height:"30px", marginTop:"15px",width:"300px"}} />
         
         </div>
            {query ? <div className="main">
            {data.map((item:any)=>{
              return (
                <>
                <NavLink to={`/data/Country  ${item.country} - capital ${item.city}`}>
                <div className="main2"  key={item.id}>
                  <h3>{item.country}</h3>
                </div></NavLink>
                </>
              )
            })}
            </div>:""}
         </>
       )}
      
   



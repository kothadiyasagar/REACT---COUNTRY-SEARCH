import { useParams,useNavigate } from "react-router-dom"



 export  const  Data =()=>{
    let navigate = useNavigate();
     const {item} = useParams()
     console.log("sagar",item)
     return (
         <>
         <div style={{width:"100%", height:"70px", backgroundColor:"black", display:"flex"}}>
           <img    style={{height:"40px", marginTop:"15px", marginLeft:"20px", borderRadius:"50%"}}  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.C0It0Y9-HXIu_ieBD9beNwAAAA%26pid%3DApi&f=1"/>
     
           <input  placeholder="search country"   style={{marginLeft:"40%", height:"30px", marginTop:"15px",width:"300px"}} />
           <button style={{border:"none", height:"35px",marginTop:"15px"}} onClick={()=>navigate('/')}>Back</button>
         
         </div>
        
         <h1>{item}</h1>
        
         </>
     )
 }
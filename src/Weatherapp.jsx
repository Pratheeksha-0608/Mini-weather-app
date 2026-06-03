import Searchbox from "./Searchbox.jsx";
import Infobox from "./Infobox.jsx";
import { useState } from "react";
export default function Weatherapp(){
    const [error,seterror]=useState(false);
    const [info,setinfo]=useState(null);
    let updateinfo=(res)=>{
        setinfo(res);
    }
    return(
        <div style={{textAlign:"center"}}>
        <Searchbox updateinfo={updateinfo} error={error} seterror={seterror}/>
        <Infobox info={info} error={error}/>
        </div>
    )
}
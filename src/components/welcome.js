import React from "react";
import { useParams } from "react-router";

const Welcome = (props) => { 
    const { parameter, color, bgcolor } = useParams();
    if (parameter == "home") { 
        return <h1> Welcome </h1>
    }
    else if (isNaN(+parameter) == false){
        return <div>
             <h1>the number is :{parameter}</h1></div>
    }
    else{
        return <h1 style={{color:color, backgroundColor:bgcolor}}>the word is :{parameter}</h1>
    }
};
export default Welcome;
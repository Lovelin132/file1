import React, { useEffect, useState } from "react";

function Sub(Props){
  const [color , setcolor] = useState("Aqua")
  const  Click  = (color)=>{
    setcolor(color)
  }

  useEffect(()=>{
      document.body.style.backgroundColor=color
  },[color])
    
  return(
        <div>

            <h2>Child {Props.name}</h2>
            <button onClick={()=>Click("yellow")}>Click me</button>
        </div>
    );

}
export default Sub;
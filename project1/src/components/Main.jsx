import React, { useState } from "react";
import Sub from '../components/Sub';



function Main() {
    const [color ,setcolor] =useState('');
    return (
       < div className="container1">
        <div className="box1"  style={{backgroundColor:`${color}`}}>
            <h1>Parent componnent</h1>
            
            <select 
                onChange={(e)=>setcolor(e.target.value)}>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="purple">purple</option>

                
            </select>
            <Sub name="Change-color"/>
        </div>
       </div>
    );
}

export default Main;
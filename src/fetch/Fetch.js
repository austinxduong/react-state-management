import React from "react";
import { useState } from "react";

// the fetch will return a promise
// export const fetchApi = async () => {

//     const res = await fetch('https://api.aakhilv.me/fun/wouldyourather');
//     const json = await res.json();
  
//     return json;
//   };

function Fetch() {

    const [data, setData] = useState(["hello"]);

    const fetchAPI = () => {
        fetch('https://api.aakhilv.me/fun/wouldyourather')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json.data[0]);
    });

}


  return (
    <div>
        <button onClick={fetchAPI}>Fetch API</button>
        <div className='api-card'>
            <pre className='fetch'>{JSON.stringify(data)}</pre>
        </div>
        
    </div>
  )
}

export default Fetch
  
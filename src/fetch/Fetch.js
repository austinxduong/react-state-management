import React from "react";
import { useState } from "react";

// the fetch will return a promise
// export const fetchApi = async () => {

//     const res = await fetch('https://api.aakhilv.me/fun/wouldyourather');
//     const json = await res.json();
  
//     return json;
//   };

function Fetch() {

    const [data, setData] = useState([]);

    const fetchAPI = () => {
        fetch('https://api.aakhilv.me/fun/wouldyourather')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
    });

}


  return (
    <div>
        <button onClick={fetchAPI}>Fetch API</button>
        <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default Fetch
  
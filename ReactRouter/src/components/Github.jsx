import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){
    //with using data loader
    const data = useLoaderData()




    // without using Data loader
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res) => res.json())
    //     .then((data) => {
            
    //         setData(data)
    //     })
    //     .catch((error) => 
    //     console.log("error")
    // )
    // }, [])
    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} width={300} alt="" />
      </div>
    );
}

export const GithubInfo = async () => {
    const data = await fetch("https://api.github.com/users/hiteshchoudhary")
    return data.json()
}

export default Github
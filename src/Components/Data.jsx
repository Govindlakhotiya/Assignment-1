import { useEffect, useState } from 'react';
import axios from 'axios';
import Displaydata from './Displaydata';


const Data = () => {
const [data,setData]=useState([])

const getData=()=>{

    axios.get("https://manishevulation1.herokuapp.com/profile")
    .then((res)=>{
        setData(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
  
}
useEffect(() => {
    getData()
},[])



  return (
     

    <div>
      <table style={{margin:"auto"}}>
        <thead style={{ fontWeight: "700" }} className="table-heading">
          <tr>
            <th>ID</th>
            <th >Image</th>
            <th style={{width:"150px"}}>First Name</th>
            <th style={{width:"150px"}}>Last Name</th>
            <th style={{width:"150px"}}>Email</th>
            <th>Gender</th>
            <th>Country</th>   
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
         {data.map((item)=>{
          return <Displaydata key={item.id} profile={item}/>
          
         })}
        </tbody>
      </table>
    </div>
  )
}

export default Data

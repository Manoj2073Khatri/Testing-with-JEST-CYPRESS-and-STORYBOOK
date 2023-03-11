import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
   const [fetchData,SetFetchData] = useState<any>();

   async function getUser() {
    try {
      const response = await axios.get('https://dummyjson.com/products/1');
      SetFetchData(response?.data)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
   useEffect(() => {

     let isMounted = true;
     if(isMounted) {
        getUser();
     }
   
     return () => {
        isMounted=false;
      
     }
   }, [])
   



  return (
    <>
      {
        fetchData?
        <div >
                <p>{fetchData?.brand}</p>
                <p>{fetchData?.category}</p>
                <p>{fetchData?.description}</p>
                <p>{fetchData?.discountPercentage}</p>
                <p>{fetchData?.price}</p>
            </div>
        :''
      }
    
    </>
  )
}

export default DataFetching
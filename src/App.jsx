import { useState } from 'react'
import './App.css'
import React from 'react'
import data from "./data"
import { UserDetails } from './UserDetails'


// console.log(data);


export const App = () => {
  const dataForSort = data;
  const [sortedData, setSortOrder] = useState(dataForSort); // State for sorting order


  

  // console.log("Original data",dataForSort);

  // Function to sort data based on sort order
  const handleSortAsc = () => {
    const sorted = [...sortedData].sort((a, b) => a.first_name.localeCompare(b.first_name));
    setSortOrder(sorted); // This will trigger a re-render
  };

  const handleSortDesc = () => {
    const sorted = [...sortedData].sort((a, b) => b.first_name.localeCompare(a.first_name));
    setSortOrder(sorted); // This will trigger a re-render
  };

  // console.log("sorted data",sortedData);

  return (
    <div className='main-div'>
      <div className='button-div'>
        <button onClick={handleSortAsc}>Sort Ascending</button>
        <button onClick={handleSortDesc}>Sort Descending</button>
      </div>
      
      <UserDetails userArray={sortedData}/>
    </div>
  )
}

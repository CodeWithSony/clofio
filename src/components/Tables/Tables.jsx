import React from "react";
import "./Tables.css";




const Tables = ({data, columns, heading}) => {
  return(
    <>
    <div className="tableContainer">

    <table className="table">
         <thead>
          <th scope="col" className="horizonalLine" colSpan={4}>{heading}</th>
         </thead>
      <thead  className='horizonalLine' colSpan={4}>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))} 
        </tr>

      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, colIndex) => (
            <td key={colIndex}> {row[column]}</td>
          ))}
        </tr>
        ))}
      </tbody>
    </table>
    </div>
    
    </>
  )
}

export default Tables;
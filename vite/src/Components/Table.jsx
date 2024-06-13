import React from 'react'

const Table = ({headder=[],data=[]}) => {
  return (
    <>
          <table border={1}>
        <tr>
          {headder.map((item)=>{
            <th key={item}>{item}</th>
          })}
        </tr>

        <tbody border={3}>
          {data.length > 0 ? (
            data.map((car, index) => {
              return (
                <tr key={car?.name}>
                  <td>{index + 1}</td>
                  <td>{car?.name}</td>
                  <td>{car?.model}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Table

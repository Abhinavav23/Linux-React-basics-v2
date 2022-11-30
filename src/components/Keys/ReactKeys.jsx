import React from 'react'

function ReactKeys() {
    const allowedPlayerList = ['Virat', 'Rohit', 'Surya', 'Risabh'];
  return (
    <>
        <div>ReactKeys</div>
        {
            allowedPlayerList.map((player, i) => {
                return <div key={2}>Name: {player}</div>
            })
        }
    </>
  )
}

export default ReactKeys
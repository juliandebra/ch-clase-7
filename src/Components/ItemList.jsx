import React from 'react'
import Card from './Card'

const ItemList = ({list}) => {

    // Otra forma de trabajar map
    // const listMap = list.map((digimon) => {
    //     return <Card digimon={digimon} key={digimon.id}/>        
    // })
    // console.log(listMap)

  return (
    <div>
        {/* Ejemplo digimon */}
        {list.map((digimon) => <Card item={digimon} key={digimon.id}/> )} 
        
        {/* Ejemplo rick and morty */}
        {/* {list.map((personaje) => <Card item={personaje} key={personaje.id}/> )} */}
    </div>
  )
}

export default ItemList
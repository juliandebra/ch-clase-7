import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [list, setList] = useState([])
    const url = 'https://www.digi-api.com/api/v1/digimon/' //URL digimon
    // const url = 'https://rickandmortyapi.com/api/character' //URL rick and morty
    // const url = 'https://api.mercadolibre.com/sites/MLA/search?q=sillas'  //URL MELI
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            // setList(data.content) // Ejemplo Digimon
            // setList(data.results) // Ejemplo MELI y rick and morty
        })
    }, [])

  return (
    <div>
        {/* Ejemplo MELI */}
        {/* {list.map((silla) => (
            <div>
                <h3>{silla.title}</h3>
                <img src={silla.thumbnail} alt="" width={300}/>
            </div>
        ))} */}

        <ItemList list={list} />
    </div>
  )
}

export default ItemListContainer
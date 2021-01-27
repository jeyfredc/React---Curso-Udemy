import React, { useState } from 'react'

const GiffExpertApp = () => {

    // const categories = ['One Punch', 'Samuari X', 'Dragon Ball'];

    const [categories, setcategories] = useState(['One Punch', 'Samuari X', 'Dragon Ball'])

    const handleAdd = () => {
        setcategories(
            [...categories, 'HunterXHunter']
        )
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ol>
        </div>
    )
}

export default GiffExpertApp

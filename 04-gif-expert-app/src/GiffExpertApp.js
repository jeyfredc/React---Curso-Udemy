import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samuari X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setcategories(
    //         [...categories, 'HunterXHunter']
    //     )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ol>
        </>
    )
}

export default GiffExpertApp

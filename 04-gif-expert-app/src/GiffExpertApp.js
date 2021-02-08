import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['Bleach'])

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
                    categories.map( category => (
                        <GifGrid
                        key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GiffExpertApp

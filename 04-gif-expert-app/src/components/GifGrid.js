import React from 'react'

const GifGrid = ( { category } ) => {

    const getGifs = async() => {

        const url='https://api.giphy.com/v1/gifs/search?api_key=soVdva8bjB8shZXmy18BLAE5wCSgYZZv&q=Bleach&limit=10'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid

import React, { useState } from 'react'

const useFetchGifs = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })

    setTimeout( () => {
        setstate({
            data: [1,2,3,4,5,6],
            loading: false
        })
    },3000);

    return state;
}

export default useFetchGifs;

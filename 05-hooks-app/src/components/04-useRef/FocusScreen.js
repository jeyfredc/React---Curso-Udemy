import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>

            <input
                ref= { inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick= { handleClick }
            >
                Focus
            </button>
        </div>
    )
}

import React from 'react'

export default function CoordinatesButton(props){
    function handleClick(event){
        props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    return(
        <button onClick={handleClick}>Log Coordinates</button>
    )
}
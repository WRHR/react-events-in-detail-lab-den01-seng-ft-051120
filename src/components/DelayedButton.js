import React from 'react'

export default function DelayedButton(props){
    function delayClick(event){
        event.persist()
        window.setTimeout(()=>{
            props.onDelayedClick(event)
        }, props.delay)
    }
    return(
        <button onClick={delayClick}>Delay Click</button>
    )
}

import React from 'react'
import './Icon.css'

const icon = (props) => {
    
    const styles = {
        path: {
            fill: props.color
        }
    }
    
    return (
        <svg width="25" height="25" viewBox="0 0 26 26" className="icon">
            <path d={props.icon} style={styles.path}/>
        </svg>
    )
}

export default icon


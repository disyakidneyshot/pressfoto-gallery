import React from 'react'
import './Icon.css'

const icon = (props) => {
    
    const styles = {
        path: {
            fill: props.color
        }
    }
    
    return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="icon">
                <path d={props.icon} style={styles.path}/>
            </svg>
    )
}

export default icon


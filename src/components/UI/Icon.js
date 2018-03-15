import React from 'react'
import './Icon.css'

const icon = (props) => {
    
    const styles = {
        path: {
            fill: props.color
        },
        svg: {
            size: props.width ? props.width : '24'
        }
    }
    
    return (
            <svg width={styles.svg.size} height={styles.svg.size} viewBox={`0 0 ${styles.svg.size} ${styles.svg.size}`} fill="white" className="icon">
                <path d={props.icon} style={styles.path}/>
            </svg>
    )
}

export default icon


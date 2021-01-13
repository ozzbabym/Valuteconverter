import React from 'react'
import preloader from './preloader.gif'

export const Preloader = () => {
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <img src={preloader}/>
            </div>
        </div>
    )
}
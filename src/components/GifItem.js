import React from 'react'

export const GifItem = ({ id, title, url }) => {
    return (
        <div className="card">
            <p>{title ? title : 'Sin titulo'}</p>
            <img src={url} alt={title} className="img"></img>
        </div>
    )
}

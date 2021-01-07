import React, {  } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>

        {loading && 'Cargando'}

        <div className="flex animate__animated animate__fadeInDown">
            { images.map(img => <GifItem key={img.id} {...img} />)}
        </div>
        </>
    )
}

export default GifGrid

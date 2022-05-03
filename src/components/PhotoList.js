import React from 'react';

export const PhotoList = ({photos}) => {
  return (
    <div>
        {photos.map(photo => (
            <div className='card' key={photo.id}>
                <img src={photo.url} alt={photo.title} />
                <h3>{photo.title}</h3>
                <p>{photo.desc}</p>
            </div>
        ))}
    </div>
  )
}

import React from 'react'
import confetti from 'canvas-confetti'
function PokemonCard({ id, name, image, type }) {
  const onToggleFavorite = () => {
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    })
  }

  return (
    <div className='thumb-container'>
      <div className='number'>
        <small className='id-text'>#0{id}</small>
      </div>
      <img className='scale' src={image} alt={name} />
      <div className='detail-wrapper'>
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <button onClick={onToggleFavorite}>Add to Favorites</button>
      </div>
    </div>
  )
}

export default PokemonCard

import React from 'react'
import './Gallery.css'
import Card from './Card/Card'

const gallery = (props) => {
  let cards = props.images.map((image) => 
    <Card 
      image={image} 
      key={image.item_id} 
      checkPhoto={props.onCheckPhoto} 
      onDelete={props.onDeleteImage}
      modalPicHandler={props.onModalClick}/>
  )
  return (
    <div className="container">
      <div className="row start-md">
        <div className="col-md-3 counter">
          {props.images.length} ИЗОБРАЖЕНИЙ
        </div>
      </div>
      <div className="content row">
        {cards}
      </div>
    </div>
  )
}

export default gallery
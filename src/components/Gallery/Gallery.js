import React, { Component } from 'react'
import './Gallery.css'
import Card from './Card/Card'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Gallery extends Component {

  componentWillReceiveProps (nextProp) {
    this.regExpTest(nextProp)
  }

  regExpTest = (nextProp) => {
    console.log(/[5-9]$/.test(nextProp.images.length))
    console.log(/[5-9]$/.test(9), 'ALALALALL')
    
  }

  render () {
    let cards = this.props.images.map((image) => 
      <CSSTransition key={image.item_id} timeout={{ appear: 1000, enter: 500, exit: 300 }} classNames="fade" appear>
        <Card 
          image={image} 
          checkPhoto={this.props.onCheckPhoto} 
          onDelete={this.props.onDeleteImage}
          modalPicHandler={this.props.onModalClick}/>
      </CSSTransition>
    )



    return (
      <div className="container">
        <div className="row start-xs">
          <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12">
            {this.props.images.length}
            {/* { 
              /\d+$/.test(this.props.images.length)
                ? 'ИЗОБРАЖЕНИЕ'
                : /\[5-9]+$/.test(this.props.images.length) 
                  ? 'ИЗОБРАЖЕНИЙ'
                  : null
              } */}
          </div>
        </div>
        <TransitionGroup
          className="row start-xs">
          {cards}
        </TransitionGroup>
      </div>
    )
  }
}
export default Gallery
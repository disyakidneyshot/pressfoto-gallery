import React, { Component }  from 'react'
import './Card.css'
import Icon from '../../UI/Icon'
import { ICONS } from '../../UI/paths'

class Card extends Component {

  state = {
    isHovered: false,
    isChecked: this.props.image.isChecked
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.isChecked !== nextProps.image.isChecked) {
      this.setState({ isChecked: nextProps.image.isChecked })
    }
    return
  }

  onHover = () => {
    this.setState({ isHovered: true })
  }

  onHoverOff = () => {
    this.setState({ isHovered: false })
  }

  onCheck = (item_id) => {
    this.setState({ isChecked: !this.state.isChecked })     
    this.props.checkPhoto(item_id)
  }
  

  render () {
  const checkBtn =
        <button 
          className="btn card-btn"
          onClick={() => this.onCheck(this.props.image.item_id)}>
          <Icon icon={this.state.isChecked ? ICONS.CHECKBOX : ICONS.CIRCLE} color={this.state.isChecked ? '#07f417' : 'white'}/>
        </button>

  const otherBtns =
          <div className>
            <button 
              className="btn card-btn"
              onClick={() => this.props.onDelete(this.props.image.item_id)}>
              <Icon icon={ICONS.SHARE} color={'white'}/>
            </button>
            <button 
              className="btn card-btn"
              onClick={() => this.props.onDelete(this.props.image.item_id)}>
              <Icon icon={ICONS.TRASH} color={'white'}/>
            </button>
            <button 
              className="btn card-btn"
              onClick={() => this.props.onDelete(this.props.image.item_id)}>
              <Icon icon={ICONS.DOWNLOAD} color={'white'}/>
            </button>
          </div>

  const modalBtn = 
          <button
            className="btn eye-modal"
            onClick={() => this.props.modalPicHandler(this.props.image.item_id)}>
            <Icon icon={ICONS.EYE} color={'white'}/>
          </button>  

    return (
      <div className="col-md-4">
        <div className="card"
          style={{ backgroundImage: `url(${this.props.image.sample_url})` }}
          onMouseOver={this.onHover}
          onMouseLeave={this.onHoverOff}>
          <div className="overlay" style={this.state.isChecked ? { opacity: '0.4' } : null}></div>
          <div className="wrapper">
            <div className="check-btn">
              {this.state.isChecked ? <div className="bg-circle"></div> : null}            
              {this.state.isChecked || this.state.isHovered ? checkBtn : null}
            </div>
            <div className="other-btns">
              {this.state.isHovered ? otherBtns : null}
            </div>
            <div className="modal-btn">
              {this.state.isChecked || this.state.isHovered ? <div className="modal-circle"></div> : null}
              {this.state.isChecked || this.state.isHovered ? modalBtn : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card

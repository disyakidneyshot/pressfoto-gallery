import React, { Component }  from 'react'
import './Card.css'
import Icon from '../../UI/Icon'
import { ICONS } from '../../UI/paths'
// import { CSSTransition } from 'react-transition-group'

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
          className="btn"
          onClick={() => this.onCheck(this.props.image.item_id)}>
          <Icon
            icon={this.state.isChecked ? ICONS.BLANKCIRCLE : ICONS.CIRCLE} 
            color='white'
            // width={this.state.isChecked ? '24' : null } 
            />
          { this.state.isChecked ? 
            <svg style={{ position: 'absolute', top: '14px', left: '20px' }} width="24" height="24"  viewBox="0 0 24 24">
              <path fill="#07f417" d={ICONS.CHECKBOX}/>
            </svg>
            : null }
        </button>

  const otherBtns =
          <div>
            <button 
              className="btn"
              onClick={() => this.props.onDelete(this.props.image.item_id)}>
              <Icon icon={ICONS.SHARE} color={'white'}/>
            </button>
            <button 
              className="btn"
              onClick={() => this.props.onDelete(this.props.image.item_id)}>
              <Icon icon={ICONS.TRASH} color={'white'}/>
            </button>
            <button 
              className="btn"
              onClick={() => this.props.onDelete(this.props.image.item_id)}>
              <Icon icon={ICONS.DOWNLOAD} color={'white'}/>
            </button>
          </div>

  const modalBtn = 
          <button
            className="btn non-visible"
            onClick={() => this.props.modalPicHandler(this.props.image.item_id)}>
            <Icon icon={ICONS.EYE} color={'white'} />
          </button>  

    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
      {/* <CSSTransition
        mountOnEnter
        unmountOnExit
        in={this.props.image}
        timeout={1000}
        classNames="card-item"> */}
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
              {this.state.isChecked || this.state.isHovered ? <div className="modal-circle non-visible"></div> : null}
              {this.state.isChecked || this.state.isHovered ? modalBtn : null}
            </div>
          </div>
        </div>
      {/* </CSSTransition> */}
      </div>
    )
  }
}

export default Card

import React from 'react'
import './Nav.css'
import Icon from '../UI/Icon'
import { ICONS } from '../UI/paths'

const nav = (props) => {
  return (
    <nav className="row center">
      <div className="col-md-offset-1 col-md-3 flexed-start">
        <button onClick={props.undoCheck} className="btn">
          <Icon icon={ICONS.MINUSCIRCLE} color={"black"}/>        
        </button>
        <div className="nav-counter">{props.checkedCount}</div><span className="cnt-info">изображение выбрано</span>
      </div>
      <div className="col-md-4 flexed-center">
        <button onClick={props.deletePhotos} className="btn">
          <Icon icon={ICONS.TRASH} color={"black"}/>        
        </button>
        <button className="btn">
          <Icon icon={ICONS.PACKAGE} color={"black"}/>
        </button>
        <button className="btn">
          <Icon icon={ICONS.CREDITCARD} color={"black"} />
        </button>
        <button className="btn">
          <Icon icon={ICONS.ADDBOX} color={"black"} />  
        </button>
      </div>
      <div className="col-md-3 flexed-end">
        <p className="esc-text">Для отмены нажмите ESC</p>
      </div>
    </nav>
  )
}

export default nav
import React from 'react'
import './Nav.css'
import Icon from '../UI/Icon'
import { ICONS } from '../UI/paths'

const nav = (props) => {
  return (
    <nav className="flexed-center">
      <div className="nav-container">
        <div className="row">
          <div className="col-md-offset-1 col-md-3 flexed-start col-xs-3 col-sm-5 col-sm-offset-1">
            <button onClick={props.undoCheck} className="btn">
              <Icon icon={ICONS.MINUSCIRCLE} color={"black"}/>        
            </button>
            <div className="nav-counter">{props.checkedCount}</div><span className="cnt-info non-visible">изображение выбрано</span>
          </div>
          <div className="col-md-4 flexed-center col-xs-9 col-sm-5">
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
          <div className="col-md-3 flexed-end non-visible">
            <p className="esc-text">Для отмены нажмите ESC</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default nav
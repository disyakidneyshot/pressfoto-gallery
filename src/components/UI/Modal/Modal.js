import React, { Component } from 'react'

import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../hoc/Auxiliary'
import './Modal.css'

export default class Modal extends Component {

    render () {
        return (
            <Aux>
                <Backdrop clicked={this.props.closeModal} show={this.props.show}/>
                <div 
                    className="Modal"
                    onClick={this.props.closeModal}
                    style={{
                        // transform: this.props.show ? 'translateY(0%)' : 'translateY(-150%)',
                        opacity: this.props.show ? '1' : '0',
                        // backgroundImage: `url(${this.props.modalPicUrl})`
                    }}>
                    <img src={this.props.modalPicUrl} className="modal-img"/>
                </div>
            </Aux>
        )
    }
}
import React, { Component } from 'react'

import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../hoc/Auxiliary'
import './Modal.css'

export default class Modal extends Component {

    render () {
        const modalClasses = ['Modal', this.props.show ? 'ModalOpened' : 'ModalClosed']
        return (
            <Aux>
                <Backdrop clicked={this.props.closeModal} show={this.props.show}/>
                <div 
                    className={modalClasses.join(' ')}>
                    <img src={this.props.modalPicUrl} className="modal-img" alt="modal-window"/>
                </div>
                { this.props.show ?
                    <div className="close-btn" onClick={this.props.closeModal}>
                        &times;
                    </div>
                    : null
                }
            </Aux>
        )
    }
}
import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    render(){
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className="modal-image"
                    style={{
                        transform: this.props.show ? 'translate(-50%,-50%)' : 'translate(-50%,-140vh)',
                        opacity: this.props.show ? '1' : '0',
                        pointerEvents: this.props.show ? 'auto' : 'none'
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
    
        )
    }
} 

export default Modal;
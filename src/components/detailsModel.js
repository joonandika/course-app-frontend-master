import React from 'react';

import '../styles/model.css';
import '../styles/signup.css';

import ParticleBack from './particles';

const Modal = (props) => {
    return (
        <div style={{position:"absolute",height:"150%",top:window.pageYOffset,bottom:0,left:0,right:0,width:"100%",zIndex:2,backgroundColor:"rgba(66,66,66,0.6)"}}>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                  
                  zIndex:3,
                  position:"absolute",
                  top:0
                 
                }}>
                <div className="modal-header">
                <h3 className="modalHead">{props.title}</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                <div className="imgcover" style={{width:"100%",objectFit:"cover",height:"13vw",justifyContent:"center"}}>
                            <img src={props.image} className="embed-responsive-item" style={{maxHeight:"13vw",minHeight:"11vw"}} />
                </div>
                   
                    <p>
                        {props.details}
                    </p>
                    <p>
                        email -{props.email}
                    </p>
                    <p>
                        phone -{props.phone}
                    </p>
                    <p>
                        Address -{props.address}
                    </p>
                    <p>
                        courses - {props.courses.substring(2,props.courses.length)}
                    </p>
                    <button className="btn btn-danger" onClick={props.close}>Close</button>
                <a className="btn btn-info" href={props.url} target="_blank">Visit Website</a>
                </div>
              
                <div className="modal-footer">
                    
                </div>
            </div>
            <ParticleBack/>
        </div>
    )
}

export default Modal;

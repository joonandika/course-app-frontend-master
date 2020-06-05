import React from 'react';

import '../styles/model.css';

const Modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                  top:window.pageYOffset
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
                        courses - {props.courses}
                    </p>
                    <button className="btn btn-danger" onClick={props.close}>Close</button>
                <a className="btn btn-info" href={props.url} target="_blank">Visit Website</a>
                </div>
              
                <div className="modal-footer">
                    
                </div>
            </div>
        </div>
    )
}

export default Modal;

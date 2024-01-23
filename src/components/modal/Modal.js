import React from "react";


function Modal({ type }) {

    return (
        <div className="modal-wrapper">
            {type === "help"
                ?
                <div className="help-modal-wrapper">
                    HELP MODAL
                </div>
                :
                <div className="filter-modal-wrapper">
                    FILTER MODAL
                </div>
            }
        </div>
    );
}

export default Modal;
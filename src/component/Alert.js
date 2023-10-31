import React from 'react';

function Alert(props) {
  return (
    props.alert.msg && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.msg}</strong> 
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => props.onCloseAlert()}></button>
      </div>
    )
  );
}

export default Alert;
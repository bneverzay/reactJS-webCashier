import React from 'react';

const Footer = (props) => {

    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center text-uppercase">
                <small>
                    <span className="text-muted"> © {props.credit} | {props.year} </span>
                </small>
            </div>
        </div>
    )
}

export default Footer;
import React from "react"


function Footer({ array }) {

    return (

        <div className="d-flex justify-content-center bg-secondary rounded-pill align-items-end text-white vh-1">
            <div className="d-flex align-items-center pt-2">
                <p> {array.length} item left</p>
            </div>
        </div>

    )



}

export default Footer;
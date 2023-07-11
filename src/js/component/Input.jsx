import React from "react";


function Input({ valor, setValor, enterTecla }) {



    return (
        <div className=" d-flex justify-content-center">
            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Add a Task"
                value={valor}
                onChange={(e) => { setValor(e.target.value), console.log(e) }

                }

                onKeyDown={(e) => enterTecla(e)}



            />
        </div>

    )
}

export default Input;

import React from "react"


function Eliminado({ deleteList }) {

    return (<div className=" d-flex justify-content-center mt-2">

        <button type="button" className=" btn btn-danger " onClick={() => deleteList()}>  Eliminar todo

        </button>

    </div>

    )

}

export default Eliminado;
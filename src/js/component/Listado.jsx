import React from "react";



function Listado({ array, setArray }) {

    return (
        <div className=" " >

            <ul className="list-group">

                {array.length >= 0
                    ? array.map((item, index) => {

                        return (
                            <div className="text-white bg-info rounded-pill" key={index}>
                                <li className="d-flex justify-content-between list-group-item mx-3">{item}<button className=" bg-info rounded-circle" onClick={() => setArray(

                                    array.filter((i, newindex) => index != newindex)

                                )}> ❌ </button></li>

                            </div>

                        )
                    })
                    : (<li>agregar</li>)
                }


            </ul>

        </div>




    )


}

export default Listado;
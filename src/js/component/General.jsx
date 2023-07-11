
import React, { useState } from "react";
import Input from "./Input.jsx";
import Listado from "./Listado.jsx";
import Title from "./Title.jsx"
import Footer from "./Footer.jsx"
function General() {
    const [valor, setValor] = useState("")
    const [array, setArray] = useState([])

    const agregarValor = () => {

        setArray((prev) => {
            return [...prev, valor]
        })
        setValor("");
    }

    const enterTecla = (event) => {

        if (event.key == "Enter") {
            agregarValor()
        }

    }
    return (
        <div>
            <div className="container-fluid bg-dark">
                <div className="container  vh-100 w-100">

                    <Title />

                    <Input valor={valor}
                        setValor={setValor}
                        enterTecla={enterTecla}

                    />

                    if (!array.length) {
                        <div className="text-white"> agregar </div>

                    } else {
                        <Listado array={array}
                            setArray={setArray}
                        />}
                </div >

                <Footer array={array} />

            </div>

        </div>
    )

}

export default General;
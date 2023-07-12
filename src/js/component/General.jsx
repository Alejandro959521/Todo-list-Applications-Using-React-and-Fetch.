
import React, { useState } from "react";
import Input from "./Input.jsx";
import Listado from "./Listado.jsx";
import Title from "./Title.jsx"
import Footer from "./Footer.jsx"
function General() {
    const [valor, setValor] = useState("")
    const [array, setArray] = useState([])

    const agregarValor = () => {
        if (valor.trim() != "") {
            setArray((prev) => {
                return [...prev, valor]
            })
            setValor("");
        } else {
            setValor("");
            alert("campos vacío! introducir un valor porfavor")
        }
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

                    <Listado array={array}
                        setArray={setArray}
                    />
                    <Footer array={array} />
                </div >



            </div>

        </div>
    )

}

export default General;
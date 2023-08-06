
import React, { useState, useEffect } from "react";
import Input from "./Input.jsx";
import Listado from "./Listado.jsx";
import Title from "./Title.jsx"
import Footer from "./Footer.jsx"
import Eliminado from "./Eliminado.jsx"

function General() {

    const [valor, setValor] = useState("")
    const [array, setArray] = useState([])

    const enterTecla = (event) => {
        if (event.key == "Enter") {
            putList()
        }
    }

    useEffect(() => { getList() }, [])


    async function getList() {

        try {
            const url = "https://playground.4geeks.com/apis/fake/todos/"
            const options = {
                method: "GET",
                headers: {
                    "Content-type": "Application/json"
                }

            }
            const respond = await fetch(url + "user/miguel_21", options);
            // console.log(respond)
            if (respond.status == 200) {
                const body = await respond.json();
                //console.log(body);
                setArray(body);

            }
        }
        catch (error) {
            console.log(error)
        }
    }
    async function putList() {

        const tarea = {
            label: valor,
            done: false
        }
        try {
            const url = "https://playground.4geeks.com/apis/fake/todos/"
            const options = {
                method: "PUT",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(
                    [...array, tarea]

                )
            }

            // console.log(respond)
            if (tarea.label != "") {
                setValor("");
                const respond = await fetch(url + "user/miguel_21", options);
                if (respond.status == 200) {
                    getList()
                }

            } else {

                alert("campos vacíos! introducir un valor porfavor")
            }



        }
        catch (error) {
            console.log(error)
        }
    }
    async function filtradoLista(listaFiltrada) {

        //  console.log("esto es filtrado", listaFiltrada)
        try {
            const url = "https://playground.4geeks.com/apis/fake/todos/"
            const options = {
                method: "PUT",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(
                    listaFiltrada
                )

            }
            const respond = await fetch(url + "user/miguel_21", options);
            //console.log(respond)
            if (respond.status == 200) {
                getList()
            }

        }
        catch (error) {
            console.log(error)
        }
    }


    async function deleteList() {

        try {
            const url = "https://playground.4geeks.com/apis/fake/todos/"
            const options = {
                method: "DELETE",
                headers: {
                    "Content-type": "Application/json"
                }

            }
            const respond = await fetch(url + "user/miguel_21", options);
            //console.log(respond)
            if (respond.ok) {
                usuarionuevo()
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    async function usuarionuevo() {

        try {
            const url = "https://playground.4geeks.com/apis/fake/todos/"
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(
                    []
                )

            }
            const respond = await fetch(url + "user/miguel_21", options);
            //console.log(respond)
            if (respond.ok) {
                getList()
            }
        }
        catch (error) {
            console.log(error)
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
                        filtradoLista={filtradoLista}

                    />
                    <Footer array={array} />
                    <Eliminado deleteList={deleteList}

                    />
                </div >
            </div>

        </div>
    )

}

export default General;
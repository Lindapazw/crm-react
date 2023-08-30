import { useNavigate, Form } from "react-router-dom"
import Formulario from "../components/Formulario"

export function action() {
    console.log('Enviando formulario...');
}

const NuevoCliente = () => {

    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">LLena los campos para registrar un nuevo cliente</p>

            <div className="flex justify-end">
                <button className="bg-blue-800 text-white px-3 py-1 font-bold" onClick={() => navigate('/')}>Volver</button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto p-5 scroll-py-10 mt-10">
                <Form method='post'>
                    <Formulario/>
                    <input className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg" type="submit" value="Registrar cliente"/>
                </Form>
            </div>
        </>
    )
}

export default NuevoCliente

import { useNavigate, Form, useActionData } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error";

export async function action({ request }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    // validacion
    const errores = []
    if(Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios');
    }
    // retorna datos si hay errores
    if(Object.keys(errores).length) {
        console.log('Si hay errores');
        return errores;
    }
    return null;
}

const NuevoCliente = () => {

    const errores = useActionData()
    const navigate = useNavigate()

    console.log(errores);

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">LLena los campos para registrar un nuevo cliente</p>

            <div className="flex justify-end">
                <button className="bg-blue-800 text-white px-3 py-1 font-bold" onClick={() => navigate('/')}>Volver</button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto p-5 scroll-py-10 mt-10">
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form method='POST'>
                    <Formulario/>
                    <input className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg" type="submit" value="Registrar cliente"/>
                </Form>
            </div>
        </>
    )
}

export default NuevoCliente

import { Form, useNavigate, useLoaderData} from "react-router-dom";
import { obtenerCliente } from "../data/Clientes";
import Formulario from "../components/Formulario";

export async function loader({params}) {
    const cliente = await obtenerCliente(params.clienteId);
    if(Object.values(cliente).length === 0) {
        throw new Response( '', {
            status: 404,
            statusText: 'El cliente no fue encontrado'
        })
    }
    return cliente;
}

function EditarClientes() {

    const navigate = useNavigate();
    const cliente = useLoaderData();
    console.log(cliente);

    return (
        <div>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">LA continuación podras editar los datos del cliente</p>

            <div className="flex justify-end">
                <button className="bg-blue-800 text-white px-3 py-1 font-bold" onClick={() => navigate('/')}>Volver</button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto p-5 scroll-py-10 mt-10">
                {/* {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error> )} */}
                <Form method='POST' noValidate>
                    <Formulario cliente={cliente}/>
                    <input className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg" type="submit" value="Guardar cambios"/>
                </Form>
            </div>
        </div>
    )
}

export default EditarClientes


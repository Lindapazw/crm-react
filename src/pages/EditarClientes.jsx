import { Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom";
import { obtenerCliente, actualizarCliente } from "../data/Clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

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

export async function action({request, params}) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email');
    // validacion
    const errores = []
    if(Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios');
    }
    // exprecion regular para email
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)){
        errores.push('El email no es válido');
    }
    // retorna datos si hay errores
    if(Object.keys(errores).length) {
        console.log('Si hay errores');
        return errores;
    }
    // Actualizar el cliente
    await actualizarCliente(params.clienteId, datos);
    return redirect('/');
}


function EditarClientes() {

    const navigate = useNavigate();
    const cliente = useLoaderData();
    const errores = useActionData();

    return (
        <div>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">LA continuación podras editar los datos del cliente</p>

            <div className="flex justify-end">
                <button className="bg-blue-800 text-white px-3 py-1 font-bold" onClick={() => navigate('/')}>Volver</button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto p-5 scroll-py-10 mt-10">
                {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error> )}
                <Form method='POST' noValidate>
                    <Formulario cliente={cliente}/>
                    <input className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg" type="submit" value="Guardar cambios"/>
                </Form>
            </div>
        </div>
    )
}

export default EditarClientes


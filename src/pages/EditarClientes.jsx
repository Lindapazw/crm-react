import { obtenerCliente } from "../data/Clientes";

export async function loader({params}) {
    const cliente = await obtenerCliente(params.clienteId);
    console.log(cliente);
    return {};
}

function EditarClientes() {
    return (
        <div>
            Editar Clientes
        </div>
    )
}

export default EditarClientes


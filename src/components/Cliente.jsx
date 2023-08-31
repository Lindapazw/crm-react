import { useNavigate } from "react-router-dom";

function Cliente({cliente}) {

    const navigate = useNavigate()
    const {nombre, empresa, email, telefono, id} = cliente;
    
    return (
        <tr className="border-b">
            <td className='p-6'>
                <p className="text-xl text-gray-800 font-bold">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className='p-6'>
                <p className="text-md text-gray-600 "> <span className="text-gray-800 font-bold">Email: </span>{email}</p>
                <p className="text-md text-gray-600 "> <span className="text-gray-800 font-bold">Teléfono: </span>{telefono}</p>
            </td>
            <td className='p-6 flex gap-3'>
                <button className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs" type="button" onClick={() => navigate(`/clientes/${id}/editar`)}>Editar</button>
                <button className="text-red-600 hover:text-red-700 uppercase font-bold text-xs" type="button">Emilinar</button>
            </td>
        </tr>
    )
}

export default Cliente

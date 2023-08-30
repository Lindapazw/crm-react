import {useLoaderData} from 'react-router-dom'
import Cliente from '../components/Cliente';

export function loader(){
    console.log(import.meta.env);
}

function Index() {

    const clientes = useLoaderData();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3"> Administra tus clientes</p>

            {clientes.length ? 
            (   
                <table className='w-full bg-white shadow mt-5 table-auto'>
                    <thead className='bg-blue-800 text-white'>
                        <tr>
                            <th className='p-2'>Clientes</th>
                            <th className='p-2'>Contacto</th>
                            <th className='p-2'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map( cliente => (
                            <Cliente
                                key={cliente.id}
                                cliente={cliente}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p></p>
            )}
        </>
    )
}

export default Index

import { Link,  } from 'react-router-dom';
export function AdminPanelHome(){
    return(
        <div className='flex flex-row h-screen w-full'>
            <aside className='w-1/4 h-full bg-gray-100'>
                <ul>
                    <li>
                        <Link to="/store" className=' font-bold text-center p-4   '>
                            Productos
                        </Link>
                    </li>
                </ul>
            </aside>
            <main className='w-3/4 h-full bg-gray-200'>
                <h1>Bienvenido al Panel de Administración</h1>
                
            </main>
        </div>
    )
}

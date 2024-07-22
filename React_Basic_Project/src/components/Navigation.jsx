import { Link } from "react-router-dom";

const Navigation =()=>{

    const navLinks=[
        {
            nombre:'To Do List',
            direccion:'/ToDoList'
        },
        {
            nombre:'Contador',
            direccion:'/Contador'
        },
        {
            nombre:'Galeria',
            direccion:'/Galeria'
        },
        {
            nombre:'Lista Editable',
            direccion:'/ListaEditable'
        }
    ]

    return(
        <ul className="w-full flex justify-center items-center p-0.5 flex-wrap">
            {
                navLinks.map((item, index)=>{
                    return(
                        <li 
                        className="mr-2 text-black border border-black p-1 rounded-lg bg-white hover:bg-gray-400"
                        key={index}>
                            <Link to={item.direccion}>{item.nombre}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Navigation;
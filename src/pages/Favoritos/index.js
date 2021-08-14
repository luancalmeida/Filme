import { useEffect, useState } from "react";
import {Link} from  'react-router-dom';
import './favoritos.css'


export default function Favoritos() {
    const [filmes, setFilme] = useState([]);

    useEffect(() => {

        const minhaLista  = localStorage.getItem('filmes')

        setFilme(JSON.parse(minhaLista) || [])


    }, [])

    function handleDelete(id) {
        let filtro = filmes.filter((item) => {
            return(item.id !== id )
        } )

        setFilme(filtro)
        localStorage.setItem('filmes', JSON.stringify(filtro) )
    }


    return(
        <div id="mues-filmes">
            <h1>Meus Filmes</h1>
            <ul>
               {filmes.map((item) =>{
                   return(
                       <li  key={item.id} >
                           <span>{item.nome}</span>

                           <div>
                                <Link to={`/filme/${item.id}`} >Detalhes</Link>
                                <button onClick={() => handleDelete(item.id)  } >Excluir</button>
                           </div>
                       </li>
                        
                   )
               } )} 
            </ul>
        </div>
    )
}
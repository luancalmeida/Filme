import {useEffect, useState} from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css';

function Home(){ 
    // useStates para pegar os filmes da url
    const [filmes, setFilmes] = useState([]);

    
    useEffect(()=> {
        //função para ir na api e buscar
        async function loadFilmes() {
            const response = await api.get('r-api/?api=filmes')
            //console.log(response.data)
            setFilmes(response.data);
        }
        loadFilmes();

    }, [])


    return(
        <div className="container" >
            <div className="lista-filmes"  >
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id} >
                            <strong> {filme.nome} </strong>
                            <img  src={filme.foto} alt={filme.nome} />
                            <Link to="/" > Acessar </Link>

                        </article>
                    )

                })}
            </div>  
            
        </div>
    );
}

export default Home;
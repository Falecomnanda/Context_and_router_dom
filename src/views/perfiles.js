import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Perfiles = (props) => {
    const [perfil, setPerfil] = useState(null);

    useEffect(() => {
        const { match } = props;
        let id = match.params.id;
        getPerfil("https://swapi.co/api/people/"+id);
    }, []);
        

    function getPerfil(url){
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setPerfil(data);
            });

    }


    return (
        <h1>
            {
                !!perfil && (
                    perfil.name
                )
            }
        </h1>
    )
}



export default Perfiles;
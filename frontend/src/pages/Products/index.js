import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';

export default () => {
    document.title = 'Lista de Bibliotecas';

    const [libs, setLibs] = useState([]);

    const loadLibs = async () => {
      
        const response = await api.get('products');

        setLibs(response.data.docs);
    }

    useEffect(() => {
        loadLibs();
    });

    const handleDlete = async (id) => {
        try {
            await api.delete(`products/${id}`);
          
            setLibs(libs.filter(lib => lib.id !== id));
        } catch (error) {
            alert('Falha ao deletar, tente novamente.')
        }
    }

    return (
        <div className="container">
            <header id="main-header">
                <Link to="/">Listar Bibliotecas</Link>
                <Link to="/register">Cadastrar Bibliotecas</Link>
            </header>
            <div className="listArea">
                {libs.map(lib => (
                    <article key={lib._id}>
                        <div className="area-title">
                            <strong>{lib.title}</strong>
                            <button className="icon" onClick={() => handleDlete(lib._id)}><FiTrash2 size={20} color="#333" /></button>
                        </div>
                        <p>{lib.description}</p>

                        <a href={lib.url} target='blank' >Acessar</a>
                    </article>
                ))}

            </div>
        </div>
    );
}
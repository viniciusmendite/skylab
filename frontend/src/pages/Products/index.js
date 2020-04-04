import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';

export default () => {
    document.title = 'Lista de Bibliotecas';

    const [libs, setLibs] = useState([]);
    const [productInfo, setProductInfo] = useState([]);
    const [page, setPage] = useState(1);

    const loadLibs = async () => {

        const response = await api.get(`products?page=${page}`);

        setProductInfo(response.data);

        setLibs(response.data.docs);
    }

    useEffect(() => {
        loadLibs();
    }, [libs]);

    const handleDlete = async (id) => {
        try {
            await api.delete(`products/${id}`);

            setLibs(libs.filter(lib => lib.id !== id));
        } catch (error) {
            alert('Falha ao deletar, tente novamente.')
        }
    }

    const prevPage = () => {
        if (page === 1) return;

        setPage(page - 1);
    }

    const nextPage = () => {
        if (page === productInfo.pages) return;

        setPage(page + 1);
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

                <div className="actions">
                    <button disabled={page === 1} onClick={prevPage}>Anterior</button>
                    <button disabled={page===productInfo.pages} onClick={nextPage}>Próxima</button>
                </div>
            </div>
        </div>
    );
}
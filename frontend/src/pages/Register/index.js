import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default () => {
    document.title = 'Cadastro de Bibliotecas';

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();

    const handleSaveLib = async (e) => {
        e.preventDefault();

        const data = {
            title,
            description,
            url
        }

        try {
            await api.post('products', data);

            history.push('/');
        } catch (error) {
            alert('Falha ao salvar, tente novamente.');
        }
    }

    return (
        <div className="container">
            <header id="main-header">
                <Link to="/">Listar Bibliotecas</Link>
                <Link to="/register">Cadastrar Bibliotecas</Link>
            </header>

            <div className="area-form">
                <form onSubmit={handleSaveLib}>
                    <label>Insira um título</label>
                    <input type='text' placeholder="título..." value={title} onChange={e => setTitle(e.target.value)} />

                    <label>Insira uma url válida</label>
                    <input type="url" placeholder="url..." value={url} onChange={e => setUrl(e.target.value)} />

                    <label>Faça uma breve descrição</label>
                    <textarea placeholder="descrição..." value={description} onChange={e => setDescription(e.target.value)} />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}
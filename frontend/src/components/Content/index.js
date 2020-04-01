import React, { useState } from 'react';

import './styles.css';

export default () => {

    const [content, setContent] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    document.querySelector('body').addEventListener('keyup', (e) => {
        if (e.keyCode == 39) {
            setContent(false);
        } else if (e.keyCode == 37) {
            setContent(true);
        }
    });

    return (
        <>
            <header id="main-header">
                <div onClick={() => setContent(true)} id="listar">Listar Produtos</div>
                <div onClick={() => setContent(false)}>Cadastrar Produtos</div>
            </header>

            <main>
                {content &&
                    <>
                        <article className="card">
                            <h3>React Native</h3>
                            <p>A framework a build native apps with react</p>
                            <a href="#">Acessar</a>
                        </article>

                        <article className="card">
                            <h3>React Native</h3>
                            <p>A framework a build native apps with react</p>
                            <a href="#">Acessar</a>
                        </article>

                        <article className="card">
                            <h3>React Native</h3>
                            <p>A framework a build native apps with react</p>
                            <a href="#">Acessar</a>
                        </article>

                        <article className="card">
                            <h3>React Native</h3>
                            <p>A framework a build native apps with react</p>
                            <a href="#">Acessar</a>
                        </article>

                        <article className="card">
                            <h3>React Native</h3>
                            <p>A framework a build native apps with react</p>
                            <a href="#">Acessar</a>
                        </article>

                        <article className="card">
                            <h3>React Native</h3>
                            <p>A framework a build native apps with react</p>
                            <a href="#">Acessar</a>
                        </article>
                    </>
                }

                {!content &&
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder="Título" />
                        <input type='text' placeholder="Insira uma URL" />
                        <textarea placeholder="Descrição" />
                        <button type='submit'>Cadastrar</button>
                    </form>

                }
            </main>
        </>
    );
}
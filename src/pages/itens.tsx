import { useState } from 'react';
import Botao from '../components/Botao';
import Cabecalho from '../components/cabecalho';
import Rodape from '../components/Rodape';
import './itens.css';

const ItensPage = function () {
    //let estado = "INICIAL";
    const [estado, setEstado] = useState('INICIAL')

    const botaoCriarClicando = function() { 
        //estado = 'CRIAR';
        setEstado ('CRIAR');
    };

    return (
        <>
        <Cabecalho />
            <main>
                <button onClick={botaoCriarClicando}>Test</button>
                <h1>Item page</h1>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                {(estado === 'INICIAL') && (
                    <Botao texto="Criar" />
                )}
                {(estado === 'CRIAR') && (
                    <form className="item">
                        <label>
                            Nome:
                            <input type="text" placeholder="Nome" />
                        </label>
                        <label>
                            Descrição:
                            <textarea placeholder="Descrição">
                            </textarea>
                        </label>
                        <div>
                            <Botao texto="Salvar"/>
                            <Botao texto="Cancelar"/>
                        </div>
                    </form>
                )}
            </main>
            <Rodape />
        </>
    );
};

export default ItensPage;
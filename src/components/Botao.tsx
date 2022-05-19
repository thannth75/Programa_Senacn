import { type } from '@testing-library/user-event/dist/type';
import { FunctionComponent } from 'react';
import { isPropertySignature } from 'typescript';
import './Botao.css'

type Props = {
    texto: string
}

const Botao: FunctionComponent<Props> = function(Props) {
    return (
        <button>{Props.texto}</button>
    );
};

export default Botao;
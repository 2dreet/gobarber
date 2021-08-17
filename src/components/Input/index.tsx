import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './style';

// InputHTMLAttributes: interface responsavel por receber todos os atributos
// do input do html mas precisa passar uma tipagem  InputHTMLAttributes<HTMLInputElement>

// Quando quiser passar uma props que é um componente utiliza essa tipagem React.ComponentType
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  // aqui esta definindo a tipagem que o componenteType ira ter
  icon?: React.ComponentType<IconBaseProps>;
}

// aqui define que o tipo de props é a InputProps
// quando recebe a props e passa com spred {...props}
// quer dizer que vai atribuir tudo oque passar para o input

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {/* aqui utiliza Icon e nao icon para que o react intenda que é um componente
    na verdade é mais um rename  */}
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;

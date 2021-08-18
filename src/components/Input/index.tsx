import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
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

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  // a useRef server para disponibilizar o componente para busca no dom
  const inputRef = useRef(null);

  // o useField serve para registrar o componente na dom
  /*
   * fieldName -> nome do fild
   * defaultValue -> valor inicial do input
   * error -> caso queira tratar erros
   * registerField -> server para registrar o componente no unform
   */
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    // registra o fild na dom
    registerField({
      // aqui é o nome do componente
      name: fieldName,
      // ref é a referencia
      ref: inputRef.current,
      // quando for pegar o valor do componente de qual tag ele buscara
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {/* aqui utiliza Icon e nao icon para que o react intenda que é um componente
    na verdade é mais um rename  */}
      {Icon && <Icon size={20} />}
      {/* aqui o ref={inputRef} serve para registra a ref do componente */}
      {/* o defaultValue serve para quando quer deixar valor setado exp: edicao */}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;

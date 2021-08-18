import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  // essa const inputRef é o propio input declarado la em baixo

  // o useField serve para registrar o componente na dom e poder obter ele
  /*
   * fieldName -> nome do fild
   * defaultValue -> valor inicial do input
   * error -> caso queira tratar erros
   * registerField -> server para registrar o componente no unform
   *
   */
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setFocused] = useState(false);
  const [isFielld, setFielld] = useState(false);

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

  // sempre que for criar uma funcao em um componente deve usar useCallback
  // pois essa função ira ser carregada apenas quando as condicoes estabelecidas
  // nos [] mudarem é igual o useEffect
  const handleInputBlur = useCallback(() => {
    setFocused(false);
    // quando quer chegar se um atributo está preenchido
    // coloca ? antes ai so vai pegar o value caso o current esteja preenchido
    setFielld(Boolean(inputRef.current?.value));
  }, []);

  const handleInputFocus = useCallback(() => {
    setFocused(true);
  }, []);

  return (
    <Container isFielld={isFielld} isFocused={isFocused}>
      {/* aqui utiliza Icon e nao icon para que o react intenda que é um componente
    na verdade é mais um rename  */}
      {Icon && <Icon size={20} />}
      {/* aqui o ref={inputRef} serve para registra a ref do componente */}
      {/* o defaultValue serve para quando quer deixar valor setado exp: edicao */}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;

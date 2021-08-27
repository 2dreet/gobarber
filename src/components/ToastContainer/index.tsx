import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './style';

import { ToastMessage } from '../../hooks/toast';
import ToastComponent from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  // aqui usa o useTransition para animar a transicao do componente
  // no primeior parametro é passado os items ou itens que vao ser animados,
  // depois é passo um objeto com as keys, e as animações
  const messagesWithTransitions = useTransition(messages, {
    keys: (message) => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {/*

      aqui utilizada o transition criado para animar o componente, no primeiro
      parametro é o style e o segundo é cada item da lista
      é passado o style por props para ser usado no ToastComponente
      */}
      {messagesWithTransitions((style, message) => (
        <ToastComponent key={message.id} style={style} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;

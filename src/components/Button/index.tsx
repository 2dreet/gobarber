import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './style';

// Interface com extends mas como não vai ter nada sobre escrito
// é feito dessa maneira com type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// quando recebe a props e passa com spred {...props}
// quer dizer que vai atribuir tudo oque passar para o button
// aqui recupera a children e o resto fica em rest
// a tag children traz tudo que é colocado dentro do componente o restante é props
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;

import React from 'react';
import { Container } from './style';

// aqui o className serve para quando importar o componente
// poder manipular o css dele

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  children,
}) => (
  <Container className={className}>
    {/* a variavel children é tudo que passa dentro do componente */}
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;

import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
  isFocused: boolean;
  isFielld: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFielld &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

// aqui diz que vai receber o style do componente Tooltip e vai fazer algumas mudanças
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    // aqui muda o background
    background: #c53030;
    color: #fff;

    &::before {
      // aqui muda o border color da flechinha
      border-color: #c53030 transparent;
    }
  }
`;

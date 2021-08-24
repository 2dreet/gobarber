import styled from 'styled-components';
import { shade } from 'polished';
import signinImgBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  // faz com que todos os componentes de dentro tenham
  // 100vh
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  // aqui faz flex por culunas
  flex-direction: column;
  align-items: center;
  // aqui centraliza x e y
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  // pega apenas os a depois do form
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;

  background: url(${signinImgBackground}) no-repeat center;
  // ajusta 100% do tamanho disponivel
  background-size: cover;
`;

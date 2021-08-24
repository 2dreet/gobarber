import styled from 'styled-components';

export const Container = styled.div`
  // a position relative na div principal serve para indicar
  // que os componente filhos quando usado position absolute
  // tenha como referencia o conteiner pai no caso esse
  position: relative;
  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    // opacity 0 é para deixar transparente no caso invisivel
    opacity: 0;
    // visibility hidden serve para esconder o componente
    visibility: hidden;
    // aqui é para aplicar o efeito de transicao de opacity
    transition: opacity 0.4s;

    // aqui diz que a posicao é absoluta mas levando em consideração o componente pai
    position: absolute;
    // aqui calcula a posição aonde ira ficar
    bottom: calc(100% + 12px);
    // essas 2 propiedades serve para centralizar o componente no eixo do componente pai
    left: 50%;
    transform: translateX(-50%);
    //

    color: #312e38;

    // aqui cria a flechinha do tooltip
    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  // aqui é para quando passar o mouse por cima do container mostrar o tooltip
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

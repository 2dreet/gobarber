import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './style';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import logoImg from '../../assets/logo.svg';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit"> Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="new">
        <FiLogIn /> Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default Signin;

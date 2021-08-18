import React from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Content, Background } from './style';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />
        {/*
            aqui para passar para o form qual valor inicial do mesmo
            <Form initialData={{ name: 'José' }} onSubmit={handleSubmit}>
          */}
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit"> Cadastrar</Button>
        </Form>

        <a href="new">
          <FiArrowLeft /> Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

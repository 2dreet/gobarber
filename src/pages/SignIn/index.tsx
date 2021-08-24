import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Content, Background } from './style';
import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import logoImg from '../../assets/logo.svg';

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(async (data) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Deve digitar um E-mail valído'),
        password: Yup.string().required('Senha é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErros(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleLogin}>
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
        </Form>

        <a href="new">
          <FiLogIn /> Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default Signin;

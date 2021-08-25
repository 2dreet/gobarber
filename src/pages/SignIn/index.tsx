import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Content, Background } from './style';
import getValidationErros from '../../utils/getValidationErros';
import { AuthContext } from '../../context/AuthContext';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import logoImg from '../../assets/logo.svg';

interface SingInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // aqui acessa o contexto AuthContext
  // Lembrando o AuthContext só é acessivel
  // apartir dos componentes filhos dele
  // aqui depois de criado o componente de contexto é possivel acessar o contexto
  // lembrando que deve importar o contexto
  const { singIn } = useContext(AuthContext);

  // toda variavel ou dependencia externa que é usado dentro dos useCallBack deve ser adicionar la na verificacao []
  const handleLogin = useCallback(
    async (data: SingInFormData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Deve digitar um E-mail valído'),
          password: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });
        await singIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        const errors = getValidationErros(error);
        formRef.current?.setErrors(errors);
      }
    },
    [singIn],
  );

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

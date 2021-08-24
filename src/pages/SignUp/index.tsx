import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
// importa tudo dentro da variavel chamada Yup
import * as Yup from 'yup';
import { Container, Content, Background } from './style';

import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // lembrando do useCallBack serve para não duplicar a msm funcao
  // deve sempre criar assim!
  const handleSubmit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({});

      // aqui .object() diz que vai ser um objeto depois .shape({}) qual o padrao do objeto
      const schema = Yup.object().shape({
        // aqui diz que é uma string e que é obrigatoria
        name: Yup.string().required('Nome obrigatório'),
        // aqui diz que é uma string e que é obrigatoria e é um email
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('E-mail inválido'),
        // aqui diz que é uma string e que tem que ter pelo menos 6 digitos
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      // validate faz a validacao com os dados recebidos
      // o abortEarly se estiver falso valida todos os campos
      // caso o contrario ira validar apenas 1 por vez
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const erros = getValidationErros(error);
      formRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />
        {/*
            aqui para passar para o form qual valor inicial do mesmo
            <Form initialData={{ name: 'José' }} onSubmit={handleSubmit}>
          */}
        <Form ref={formRef} onSubmit={handleSubmit}>
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

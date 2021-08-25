import React, { createContext, useCallback, useState } from 'react';

import Api from '../services/Api';

interface SingInCreadencials {
  email: string;
  password: string;
}

interface SinginResponse {
  user: any;
  token: string;
}

interface AuthState {
  user: any;
  token: string;
}

interface AuthContextPayload {
  user: any;
  // aqui tipagem de funcao como é async deve retornar uma promisse
  // outra coisa é a tipagem dos parametros
  singIn(creadencials: SingInCreadencials): Promise<void>;
}

// aqui força criar um Objeto vaziu
// createContext cria o contexto
export const AuthContext = createContext<AuthContextPayload>(
  {} as AuthContextPayload,
);

// aqui criou-se o compoente de contexto para o login para poder isolar as funcoes desse contexto
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    // aqui verifica se o user esta no local storage
    // para que o data já venha com valor caso tenha já um usuario logado
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    // caso não tenha ninguem no local storage retorna ninguem
    return {} as AuthState;
  });

  const singIn = useCallback(async ({ email, password }) => {
    try {
      const response = await Api.post<SinginResponse>('/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      // salva no local storage o usuario e o token
      localStorage.setItem('@GoBarber:token', token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));

      // seta no data o token e o usuario
      setData({ token, user });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    // aqui atribui ao contexto o usuario
    <AuthContext.Provider value={{ user: data.user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
